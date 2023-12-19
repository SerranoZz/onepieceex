import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"
import CustomError from "../util/customError";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <div className="container mt-3 error">
        {isRouteErrorResponse(error) ? "Página requisitada inválida." : 
        error instanceof CustomError && error.errorCode === 422 ? error.msgs!.join("\n") :
        // error instanceof CustomError ? error.message :
        error instanceof Error ? error.message : "Erro desconhecido" }
      </div>
    </>
  )
}

export default ErrorPage