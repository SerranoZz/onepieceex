import { useMutation, useQueryClient } from "@tanstack/react-query";
import Produto from "../interfaces/produto";
import { URL_PRODUTOS } from "../util/constants";
import useApi from "./useApi";

const useCadastrarProduto = () => {
  const { cadastrar } = useApi<Produto>(URL_PRODUTOS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (produto: Produto) => cadastrar(produto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["produtos"],
      });
    },
  });
};

export default useCadastrarProduto;
