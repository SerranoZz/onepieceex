import { FieldValues, useForm } from "react-hook-form";
import useCadastrarProduto from "../hooks/useCadastrarProduto";
import Produto from "../interfaces/produto";
import useCategorias from "../hooks/useCategorias";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import dataValida from "../util/dataValida";
import Categoria from "../interfaces/categoria";
import useApi from "../hooks/useApi";
import { URL_CATEGORIAS } from "../util/constants";
import { useEffect } from "react";
import dayjs from "dayjs";
import useAlterarProduto from "../hooks/useAlterarProduto";
import { DevTool } from "@hookform/devtools";
import useProdutoStore from "../store/produtoStore";
import { useParams } from "react-router-dom";
import useProdutoPorId from "../hooks/useProdutoPorId";

const { recuperar } = useApi<Categoria>(URL_CATEGORIAS);
let categoriasValidas: Categoria[];

const validaCategoria = async (id: string) => {
  if (!categoriasValidas) {
    categoriasValidas = await recuperar();
  }
  const cat = categoriasValidas.find((categoria) => categoria.id === parseInt(id));
  return cat;
};

const regexData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
const regexImagem = /^[a-z]+\.(gif|jpg|png|bmp)$/;
const schema = z.object({
  nome: z
    .string()
    .min(1, { message: "O nome deve ser informado." })
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  descricao: z.string().min(1, { message: "A descição deve ser informada." }),
  imagem: z
    .string()
    .min(1, { message: "A imagem deve ser informada." }),
  categoria: z.string().refine(validaCategoria, { message: "Categoria inválida." }),
  disponivel: z.boolean(),
  data_cadastro: z
    .string()
    .min(1, { message: "A data de cadastro deve ser informada." })
    .regex(regexData, { message: "Data inválida." })
    .refine(dataValida, { message: "Data inválida." }),
  qtd_estoque: z
    .number({ invalid_type_error: "A quantidade em estoque deve ser informada." })
    .min(0, { message: "A quantidade em estoque deve ser maior do ue zero." }),
  preco: z
    .number({ invalid_type_error: "O preço deve ser informado." })
    .min(0.1, { message: "O preço deve ser maior ou igual a R$ 0.10" }),
});

type FormProduto = z.infer<typeof schema>;

const CadastroDeProdutosForm = () => {
  const produtoSelecionado = useProdutoStore(s => s.produtoSelecionado);
  const setProdutoSelecionado = useProdutoStore(s => s.setProdutoSelecionado);

  console.log('produto selecionado depois:' + produtoSelecionado.id)

  const tratarProdutoSelecionado = (produto: Produto) => setProdutoSelecionado(produto);

  // console.log("ressetou");
  const { mutate: cadastrarProduto, error: errorCadastrar } = useCadastrarProduto();
  const { data: categorias, error: errorCategorias } = useCategorias();
  const { mutate: alterarProduto, error: errorAlterar } = useAlterarProduto();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    setValue,
    setFocus,
    control,
  } = useForm<FormProduto>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      nome: "",
      descricao: "",
      data_cadastro: "",
      imagem: "",
    },
  });
  // console.log(register("nome"));
  const onSubmit = ({
    nome,
    descricao,
    imagem,
    categoria,
    disponivel,
    data_cadastro,
    qtd_estoque,
    preco,
  }: FieldValues) => {
    const produto: Produto = {
      nome: nome,
      descricao: descricao,
      imagem: imagem,
      categoria: { id: categoria, nome: "" },
      disponivel: disponivel, // 12/10/2023
      // 2023-10-12
      dataCadastro: new Date(
        data_cadastro.substring(6, 10) +
          "-" +
          data_cadastro.substring(3, 5) +
          "-" +
          data_cadastro.substring(0, 2)
      ),
      qtdEstoque: qtd_estoque,
      preco: preco,
    };
    console.log(produto);
    if (produtoSelecionado.id) {
      produto.id = produtoSelecionado.id;
      alterarProduto(produto);
    } else {
      cadastrarProduto(produto);
    }
  };

  useEffect(() => {
    setFocus("nome");
    if (produtoSelecionado.id) {
      reset();
      setValue("nome", produtoSelecionado.nome);
      setValue("descricao", produtoSelecionado.descricao);
      setValue("imagem", produtoSelecionado.imagem);
      setValue("categoria", String(produtoSelecionado.categoria.id));
      setValue("disponivel", produtoSelecionado.disponivel);
      setValue("data_cadastro", dayjs(produtoSelecionado.dataCadastro).format("DD/MM/YYYY"));
      setValue("qtd_estoque", produtoSelecionado.qtdEstoque);
      setValue("preco", produtoSelecionado.preco);
    }
  }, [produtoSelecionado]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      tratarProdutoSelecionado({} as Produto);
    }
  }, [isSubmitSuccessful]);

  if (errorCategorias) throw errorCategorias;
  if (errorCadastrar) throw errorCadastrar;
  if (errorAlterar) throw errorAlterar;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="nome" className="col-xl-2 fw-bold">
                Nome
              </label>
              <div className="col-xl-10">
                <input
                  {...register("nome")}
                  type="text"
                  id="nome"
                  className={
                    errors.nome
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.nome?.message}</div>
                {/*{errors.nome && <p className="text-danger">{errors.nome.message}</p>}*/}
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="descricao" className="col-xl-3 fw-bold">
                Descrição
              </label>
              <div className="col-xl-9">
                <input
                  {...register("descricao")}
                  type="text"
                  id="descricao"
                  className={
                    errors.descricao
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.descricao?.message}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="categoria" className="col-xl-2 fw-bold">
                Categoria
              </label>
              <div className="col-xl-10">
                <select
                  {...register("categoria")}
                  id="categoria"
                  className={
                    errors.categoria
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                >
                  <option value="0">Selecione uma categoria</option>
                  {categorias?.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nome}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">{errors.categoria?.message}</div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="data_cadastro" className="col-xl-3 fw-bold">
                Data Cadastro
              </label>
              <div className="col-xl-9">
                <input
                  {...register("data_cadastro")}
                  type="text"
                  id="data_cadastro"
                  className={
                    errors.data_cadastro
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.data_cadastro?.message}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="preco" className="col-xl-2 fw-bold">
                Preço
              </label>
              <div className="col-xl-10">
                <input
                  {...register("preco", { valueAsNumber: true })}
                  type="number"
                  step="0.01"
                  min="0"
                  id="preco"
                  className={
                    errors.preco
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.preco?.message}</div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="qtd_estoque" className="col-xl-3 fw-bold">
                Estoque
              </label>
              <div className="col-xl-9">
                <input
                  {...register("qtd_estoque", { valueAsNumber: true })}
                  type="number"
                  min="0"
                  id="qtd_estoque"
                  className={
                    errors.qtd_estoque
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.qtd_estoque?.message}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-xl-6">
            <div className="row mb-2">
              <label htmlFor="imagem" className="col-xl-2 fw-bold">
                Imagem
              </label>
              <div className="col-xl-10">
                <input
                  {...register("imagem")}
                  type="text"
                  id="imagem"
                  className={
                    errors.imagem
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.imagem?.message}</div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row mb-2">
              <div className="offset-xl-3 col-xl-9">
                <div className="form-check pl-0 mt-xl-0 mt-2">
                  <input
                    {...register("disponivel")}
                    type="checkbox"
                    id="disponivel"
                    className="form-check-input"
                  />
                  <label htmlFor="disponivel" className="form-check-label">
                    Disponível?
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-xl-6">
            <div className="row">
              <div className="col-xl-10 offset-xl-2">
                <button id="botao" type="submit" className="btn btn-success btn-sm me-2" style={{marginRight: '10px'}}>

                  {produtoSelecionado.id ? "Alterar" : "Cadastrar"}
                </button>
                <button
                  onClick={() => {
                    reset();
                    tratarProdutoSelecionado({} as Produto);
                  }}
                  id="botao"
                  type="button"
                  className="btn btn-danger btn-sm"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default CadastroDeProdutosForm;