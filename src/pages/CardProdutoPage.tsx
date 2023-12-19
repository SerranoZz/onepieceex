import { NavLink, useParams } from 'react-router-dom';
import useProdutoPorId from '../hooks/useProdutoPorId';
import useRemoverProduto from '../hooks/useRemoverProduto';
import { useState } from 'react';
import useProdutoStore from '../store/produtoStore';
import Produto from '../interfaces/produto';
import dayjs from 'dayjs';

const CardDeProdutoPage = () => {
  const { id } = useParams();
  const { data: produto, isLoading, error } = useProdutoPorId(id);

  const setProdutoSelecionado = useProdutoStore(s => s.setProdutoSelecionado);
  const tratarProdutoSelecionado = (produto: Produto) => setProdutoSelecionado(produto);
  
  const {
    data: produtoRemovido,
    mutate: removerProduto,
    isLoading: removendo,
    error: erroRemocao,
  } = useRemoverProduto();
  
  const [removido, setRemovido] = useState(false);

  const handleRemoverProduto = () => {
    tratarRemocaoDeProduto(produto.id);
    setRemovido(true);
  };

  const tratarRemocaoDeProduto = (id) => {
    removerProduto(id);
  };

  if (isLoading) return <h6>Carregando...</h6>;

  if (error) throw error;

  return (
    <div>
      {removido && (
        <div className="alert alert-success" role="alert">
          Produto removido com sucesso!
        </div>
      )}
      <h1 id='cardtitle'>{produto.nome}</h1>
      <div id='cardproduto'>
        <img src={produto.imagem} alt="Imagem" />
        <div id='cardinfoproduto'>
          <table id='tabela2' className="table table-responsive table-bordered table-sm">

            <tbody>
              <tr>
                <td width="20%" className="align-middle text-left" style={{fontFamily: 'Bree Serif', fontSize:'20px', fontWeight:'bold'}}>
                  Categoria
                </td>

                <td width="80%" className="align-middle text-left" style={{fontSize:'20px'}}>
                    {produto.categoria.nome}
                </td>
              </tr>

              <tr>
                <td width="20%" className="align-middle text-left" style={{fontFamily: 'Bree Serif', fontSize:'20px', fontWeight:'bold'}}>
                Nome
                </td>

                <td width="80%" className="align-middle text-left">
                    {produto.nome}
                </td>
              </tr>

              <tr>
                <td width="20%" className="align-middle text-left" style={{fontFamily: 'Bree Serif', fontSize:'20px', fontWeight:'bold'}}> 
                Preço
                </td>

                <td width="80%" className="align-middle text-left">
                    {produto.preco.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                      useGrouping: true,
                    })}
                </td>
              </tr>

              <tr>
                <td width="20%" className="align-middle text-left" style={{fontFamily: 'Bree Serif', fontSize:'20px', fontWeight:'bold'}}>
                Estoque
                </td>

                <td width="80%" className="align-middle text-left">
                    {produto.qtdEstoque.toLocaleString("pt-BR", {
                      useGrouping: true,
                    })}
                </td>
              </tr>

              <tr>
                <td width="40%" className="align-middle text-left" style={{fontFamily: 'Bree Serif', fontSize:'20px', fontWeight:'bold'}}>
                Data Cadastro
                </td>

                <td width="80%" className="align-middle text-left">
                    {dayjs(produto.dataCadastro).format("DD/MM/YYYY")}
                </td>
              </tr>

              <tr>
                <td width="20%" className="align-middle text-left" style={{fontFamily: 'Bree Serif', fontSize:'20px', fontWeight:'bold'}}>
                Disponível
                </td>

                <td width="80%" className="align-middle text-left">
                    {produto.disponivel ? 'Sim' : 'Não'}
                </td>
              </tr>
            </tbody>
          </table>

          <div>
          <NavLink to={`/cadastrar-produto`}>
              <button
                onClick={() => tratarProdutoSelecionado(produto)}
                className={`btn btn-primary btn-sm ${removido ? 'disabled' : ''}`}
                disabled={removido}
              >
                Editar
              </button>
            </NavLink>
            <button
              onClick={handleRemoverProduto}
              className={`btn btn-danger btn-sm ${removido ? 'disabled' : ''}`}
              disabled={removido}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeProdutoPage;
