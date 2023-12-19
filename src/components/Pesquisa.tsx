import { useRef } from "react";
import useProdutoStore from "../store/produtoStore";

const Pesquisa = () => {
  
  // const {nome, setNome, setPagina} = useProdutoStore();
  const nome = useProdutoStore(s => s.nome);
  const setNome = useProdutoStore(s => s.setNome);
  const setPagina = useProdutoStore(s => s.setPagina);
    
  const tratarNomePesquisado = (nome: string) => {
    setNome(nome);
    setPagina(0);
  };

  const nomeRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        tratarNomePesquisado(nomeRef.current!.value);
     }} 
     className="d-flex mb-3">
      <input defaultValue={nome} ref={nomeRef} type="text" className="form-control form-control-sm me-2" placeholder="Pesquisar..." />
      <button type="submit" className="btn btn-success btn-sm">Pesquisar</button>
    </form>
  );
};

export default Pesquisa;