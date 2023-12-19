import { create } from "zustand";
import Produto from "../interfaces/produto";

interface ProdutoStore {
    pagina: number;
    nome: string;
    produtoSelecionado: Produto;
    tamanho: number;

    setPagina: (pagina: number) => void;
    setNome: (nome: string) => void;
    setProdutoSelecionado: (produtoSelecionado: Produto) => void;
}

const useProdutoStore = create<ProdutoStore>((set) => ({
    pagina: 0,
    nome: "",
    produtoSelecionado: {} as Produto,
    tamanho: 5,

    setPagina: (pagina: number) => set(() => ({pagina: pagina})),
    setNome: (nome: string) => set(() => ({nome: nome})),
    setProdutoSelecionado: (produtoSelecionado: Produto) => set(() => ({produtoSelecionado: produtoSelecionado}))
}));
export default useProdutoStore;