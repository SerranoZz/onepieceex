import { useQuery } from "@tanstack/react-query";
import ItemCarrinho from "../interfaces/itemcarrinho";
import axios from "axios";

const useItemCarrinho = () => useQuery({
  queryKey: ['itens'],
  queryFn: () => axios
    .get<ItemCarrinho[]>("http://localhost:8080/itens")
    .then(res => res.data),
  staleTime: 10_000  
});

export default useItemCarrinho;