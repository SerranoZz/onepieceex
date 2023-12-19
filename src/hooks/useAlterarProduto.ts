import { useMutation, useQueryClient } from "@tanstack/react-query";
import Produto from "../interfaces/produto";
import { URL_PRODUTOS } from "../util/constants";
import useApi from "./useApi";

const useAlterarProduto = () => {
  const { alterar } = useApi<Produto>(URL_PRODUTOS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (produto: Produto) => alterar(produto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["produtos"],
      });
    },
  });
};

export default useAlterarProduto;
