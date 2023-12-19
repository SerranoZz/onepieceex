import axios from "axios";
import { BASE_URL } from "../util/constants"

const useAxios = () => {
    const baseURL = BASE_URL;

    const axiosInstance = axios.create({
        baseURL
    })
    return axiosInstance;
}

export default useAxios