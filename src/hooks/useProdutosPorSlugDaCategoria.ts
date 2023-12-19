import { useQuery } from "@tanstack/react-query";
import useApiProduto from "./useApiProduto";

const useProdutosPorSlugDaCategoria = (slug?: string) => {
  const { recuperarProdutosPorSlugDaCategoria } = useApiProduto();

  return useQuery({
    queryKey: slug ? ["produtos", "categoria", slug] : ["produtos"],
    queryFn: () => recuperarProdutosPorSlugDaCategoria(slug),
    staleTime: 7 * 24 * 60 * 60 * 1000,
    keepPreviousData: true,
  });
};
export default useProdutosPorSlugDaCategoria;