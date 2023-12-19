import { useInfiniteQuery } from "@tanstack/react-query";
import Produto from "../interfaces/produto";
import useApiProduto from "./useApiProduto";

interface QueryString {
  tamanho: number;
  slug?: string;
}

// const pessoa1 = {nome: "Joao", salario: 5000};
// const pessoa2 = {nome: "Lucia", salario: 3000};
// const pessoa3 = {...pessoa1, secretaria: pessoa2};  // spread

const useProdutosPaginadosPorSlugDaCategoria = (query: QueryString) => {
  const { recuperarProdutosPaginadosPorSlugDaCategoria } = useApiProduto();

  return useInfiniteQuery<ResultadoPaginado<Produto>>({
    queryKey: ["produtos", "categoria", "paginacao", query],
    queryFn: ({ pageParam = 0 }) =>
      recuperarProdutosPaginadosPorSlugDaCategoria({
        params: {
          pagina: pageParam,
          tamanho: query.tamanho,
          slugCategoria: query.slug
        },
      }),
    staleTime: 10_000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      
      return lastPage.paginaCorrente < lastPage.totalDePaginas -1 ? 
        lastPage.paginaCorrente + 1 : undefined;
    }
  });
};
export default useProdutosPaginadosPorSlugDaCategoria;
