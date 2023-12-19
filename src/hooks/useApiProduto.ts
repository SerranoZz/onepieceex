import { AxiosRequestConfig } from "axios";
import Produto from "../interfaces/produto";
import { URL_PRODUTOS } from "../util/constants";
import CustomError from "../util/customError";
import useAxios from "./useAxios";

const useApiProduto = () => {

    const axiosInstance = useAxios();

    const recuperarProdutosPorSlugDaCategoria = (slug?: string) =>
        axiosInstance
            .get<Produto[]>(URL_PRODUTOS + (slug ? "/categoria/" + slug : ""))
            .then(res => res.data)
            .catch((error) => {
                if (error.response) {
                    // significa que o servidor respondeu, porém com erro
                    throw new CustomError(
                        error.response.data.message,
                        error.response.data.errorCode
                    )
                }
                else if (error.request) {
                    // significa que a requisição foi enviada mas o servidor não respondeu
                    throw error;
                }
                else {
                    // erro desconhecido
                    throw error;
                }
            })


    const recuperarProdutoPorId = (id?: string) =>
    axiosInstance
        .get<Produto[]>(URL_PRODUTOS + (`/${id}` ))
        .then(res => res.data)
        .catch((error) => {
            if (error.response) {
                // significa que o servidor respondeu, porém com erro
                throw new CustomError(
                    error.response.data.message,
                    error.response.data.errorCode
                )
            }
            else if (error.request) {
                // significa que a requisição foi enviada mas o servidor não respondeu
                throw error;
            }
            else {
                // erro desconhecido
                throw error;
            }
        })

    const recuperarProdutosPaginadosPorSlugDaCategoria = (config: AxiosRequestConfig) =>
        axiosInstance
            .get<ResultadoPaginado<Produto>>(URL_PRODUTOS + "/categoria/paginacao", config)
            .then(res => res.data)
            .catch((error) => {
                if (error.response) {
                    // significa que o servidor respondeu, porém com erro
                    throw new CustomError(
                        error.response.data.message,
                        error.response.data.errorCode
                    )
                }
                else if (error.request) {
                    // significa que a requisição foi enviada mas o servidor não respondeu
                    throw error;
                }
                else {
                    // erro desconhecido
                    throw error;
                }
            })
    
    return { recuperarProdutosPorSlugDaCategoria,
             recuperarProdutosPaginadosPorSlugDaCategoria, recuperarProdutoPorId};
}

export default useApiProduto;
