import { useQuery } from "@tanstack/react-query";
import Produto from "../interfaces/produto";
import axios from "axios";

const useProdutoPorId = (id) => useQuery({
    queryKey: ['produto', id],
    queryFn: () => axios
      .get<Produto[]>(`http://localhost:8080/produtos/${id}`)
      .then(res => res.data),
    staleTime: 10_000  
  });
  
  export default useProdutoPorId;
  