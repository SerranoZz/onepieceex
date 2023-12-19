import { useParams } from "react-router-dom";
import CadastroDeProdutosForm from "../components/CadastroDeProdutosForm";
import Paginacao from "../components/Paginacao";
import Pesquisa from "../components/Pesquisa";
import TabelasDeProdutos from "../components/TabelasDeProdutos";

const CadastroDeProdutosPage = () => {
  return (
    <>
      <div className="mb-4">
        <h5>Cadastro de Produtos</h5>
        <hr className="mt-0" />
      </div>

      <CadastroDeProdutosForm />

      <div className="mb-4">
        <h5>Lista de Produtos</h5>
        <hr className="mt-0" />
      </div>
      
      <Pesquisa />
      <TabelasDeProdutos />
      <Paginacao />
    </>
  );
};
export default CadastroDeProdutosPage;