import { useMutation, useQueryClient } from "@tanstack/react-query";
import Produto from "../interfaces/produto";
import { URL_PRODUTOS } from "../util/constants";
import useApi from "./useApi";

const useRemoverProduto = () => {
  const { removerPorId } = useApi<Produto>(URL_PRODUTOS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => removerPorId(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["produtos"],
      });
    },
  });
};

export default useRemoverProduto;
