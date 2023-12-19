import { useMutation, useQueryClient } from "@tanstack/react-query";
import ItemCarrinho from "../interfaces/itemCarrinho";
import { URL_ITENS } from "../util/constants";
import useApi from "./useApi";

const useRemoverItemCarrinho = () => {
  const { removerPorId } = useApi<ItemCarrinho>(URL_ITENS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => removerPorId(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["itens"],
      });
    },
  });
};

export default useRemoverItemCarrinho;