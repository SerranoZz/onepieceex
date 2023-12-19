import { useMutation, useQueryClient } from "@tanstack/react-query";
import ItemCarrinho from "../interfaces/itemCarrinho";
import { URL_ITENS } from "../util/constants";
import useApi from "./useApi";

const useAlterarItemCarrinho = () => {
  const { alterar } = useApi<ItemCarrinho>(URL_ITENS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (item: ItemCarrinho) => alterar(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["itens"],
      });
    },
  });
};

export default useAlterarItemCarrinho;