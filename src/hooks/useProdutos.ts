import { useQuery } from "@tanstack/react-query";
import Produto from "../interfaces/produto";
import axios from "axios";

const useProdutos = () => useQuery({
  queryKey: ['produtos'],
  queryFn: () => axios
    .get<Produto[]>("http://localhost:8080/produtos")
    .then(res => res.data),
  staleTime: 10_000  
});

export default useProdutos;
