import { useParams, NavLink } from "react-router-dom";
import Card from "../components/Card";
import useProdutosPaginadosPorSlugDaCategoria from "../hooks/useProdutosPaginadosPorSlugDaCategoria";
import InfiniteScroll from "react-infinite-scroll-component";
import useAdicionarItemCarrinho from "../hooks/useAdicionarItemCarrinho";
import useProdutosEmItensCarrinho from "../hooks/useProdutosEmItensCarrinho";
import useItemCarrinho from "../hooks/useItemCarrinho";
import useAlterarItemCarrinho from "../hooks/useAlterarItemCarrinho";
import { FaPlus, FaMinus,  } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const CardsDeProdutosPage = () => {
  const { slug } = useParams();
  const tamanho = 12;
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useProdutosPaginadosPorSlugDaCategoria({
    tamanho,
    slug,
  });

  const { mutate: adicionarItem, error: errorAdicionar } = useAdicionarItemCarrinho();
  const { mutate: alterarItem, error: errorAlterar } = useAlterarItemCarrinho();
  const { data: itens, isLoading: isLoading2, error: error2 } = useItemCarrinho();
  const { data: produtosEmItensCarrinho, isLoading: isLoading3 } = useProdutosEmItensCarrinho();

  const verificaProdutoNoCarrinho = (produto) => {
    return produtosEmItensCarrinho && produtosEmItensCarrinho.find((obj) => obj.id === produto.id);
  };

  const handleAdicionarItem = (produto) => {
    if (verificaProdutoNoCarrinho(produto) === undefined) {
      adicionarItem({
        quantidade: 1,
        produto: produto,
      });
      window.location.reload();
    } else {
      console.log('Produto já está no carrinho');
    }
  };

  const handleQuantidadeChange = (item, novaQuantidade) => {
    alterarItem({
      id: item.id,
      quantidade: novaQuantidade,
      produto: item.produto,
      carrinho: item.carrinho,
    });
  };

  if (isLoading || isLoading2 || isLoading3) return <h6>Carregando...</h6>;

  if (error) {
    return <p>Ocorreu um erro: {error.message}</p>;
  }

  const getQtdProdutos = data?.pages.reduce((total, page) => total + page.itens.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={getQtdProdutos}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<h6>Carregando...</h6>}
      style={{overflow: "visible" }}
    >
      <div className="row">
        {data?.pages.map((page) =>
          page.itens.map((produto) => (
            <div id="cardhover" key={produto.id} className="col-md-3 col-sm-4 col-6">
              <NavLink to={`/produto/${produto.id}`} style={{textDecoration: 'none'}}>
                <Card
                  id={produto.id!}
                  imagem={produto.imagem}
                  titulo={produto.nome}
                  texto2={produto.preco.toLocaleString("pt-BR", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                    useGrouping: true,
                  })}
                />
              </NavLink>
              {verificaProdutoNoCarrinho(produto) === undefined ? (
                <div className="border-0 mb-4" id="botao-comprar" onClick={() => handleAdicionarItem(produto)}>
                  COMPRAR 
                </div>
              ) : (
                itens.map((item) => (
                  <div className="border-0 mb-0" key={item.id}>
                    {produto.id === item.produto.id && (
                      <div id="botao-maismenos">
                        <div  id="menosmais" onClick={() => handleQuantidadeChange(item, item.quantidade - 1)}><FaMinus /></div>
                        <div id="quantidade">{item.quantidade}</div>
                        <div id="menosmais" onClick={() => handleQuantidadeChange(item, item.quantidade + 1)}><FaPlus /></div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          ))
        )}
      </div>
    </InfiniteScroll>
  );
};

export default CardsDeProdutosPage;
