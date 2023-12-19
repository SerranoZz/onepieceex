import Carrinho from "./carrinho";
import Produto from "./produto";


interface ItemCarrinho {
    id?: number;
    quantidade: number;
    produto: Produto

}
export default ItemCarrinho;