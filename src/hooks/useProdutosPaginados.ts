import { useQuery } from "@tanstack/react-query";
import Produto from "../interfaces/produto";
import { URL_PRODUTOS } from "../util/constants";
import useApi from "./useApi";

interface QueryString {
  pagina: number;
  tamanho: number;
  nome: string;
}

// const pessoa1 = {nome: "Joao", salario: 5000};
// const pessoa2 = {nome: "Lucia", salario: 3000};
// const pessoa3 = {...pessoa1, secretaria: pessoa2};  // spread

const useProdutosPaginados = (query: QueryString) => {
  const { recuperarPagina } = useApi<Produto>(URL_PRODUTOS);

  return useQuery({
    queryKey: ["produtos", "paginacao", query],
    queryFn: () =>
      recuperarPagina({
        params: {
          // pagina: query.pagina,
          // tamanho: query.tamanho,
          // nome: query.nome
          ...query,
        },
      }),
    staleTime: 10_000,
    keepPreviousData: true,
  });
};
export default useProdutosPaginados;
