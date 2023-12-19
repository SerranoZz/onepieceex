import { useMutation, useQueryClient } from "@tanstack/react-query";
import ItemCarrinho from "../interfaces/itemCarrinho";
import { URL_ITENS } from "../util/constants";
import useApi from "./useApi";

const useAdicionarItemCarrinho = () => {
  const { cadastrar } = useApi<ItemCarrinho>(URL_ITENS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (item: ItemCarrinho) => cadastrar(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["itens"],
      });
    },
  });
};

export default useAdicionarItemCarrinho;