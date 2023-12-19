import React, { useEffect, useState } from 'react';
import useItemCarrinho from '../hooks/useItemCarrinho';
import useRemoverItemCarrinho from '../hooks/useRemoverItemCarrinho';
import useAlterarItemCarrinho from '../hooks/useAlterarItemCarrinho';
import ItemCarrinho from '../interfaces/itemcarrinho';
import { FaMinus, FaPlus } from 'react-icons/fa';
import dayjs from 'dayjs';

const CarrinhoPage = () => {
  const { data: itens, isLoading, error } = useItemCarrinho();

  const { mutate: alterarItem, error: errorAlterar } = useAlterarItemCarrinho();

  const [precoTotalCarrinho, setPrecoTotalCarrinho] = useState(0);

  useEffect(() => {
    // Função para calcular o preço total do carrinho
    const calcularPrecoTotal = () => {
      if (itens) {
        const total = itens.reduce((acc, item) => {
          return acc + item.quantidade * item.produto.preco;
        }, 0);
        setPrecoTotalCarrinho(total);
      }
    };

    calcularPrecoTotal();
  }, [itens]);

  const handleQuantidadeChange = (item, novaQuantidade) => {
    alterarItem({
      id: item.id,
      quantidade: novaQuantidade,
      produto: item.produto,
      carrinho: item.carrinho,
    });
  };

  const {
    data: itemRemovido,
    mutate: removerItemCarrinho,
    isLoading: removendo,
    error: erroRemocao,
  } = useRemoverItemCarrinho();
  
  const tratarRemocaoDeItem = (id) => {
    removerItemCarrinho(id);
    window.location.reload();
  };

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro: {error.message}</p>;
  }

  return (
    <div>
      <h1>Itens do Carrinho</h1>
      <table id='tabela' className="table table-responsive table-bordered table-sm">
        <thead>
          <tr>
            <th className="align-middle text-center">Produto</th>
            <th className="align-middle text-center">Preço Unitário</th>
            <th className="align-middle text-center">Quantidade</th>
            <th className="align-middle text-center">Preço Total</th>
            <th className="align-middle text-center">Remover</th>
          </tr>
        </thead>
        <tbody>
          {itens.map(item => (
            <tr key={item.id}>
              <td width="30%" className="align-middle text-center">
                <div id='produto-carrinho-info'>
                  <img className='img-fluid' src={item.produto.imagem} alt='Imagem' style={{ width: "20%"}} />{" "}
                  <div style={{ width: "80%" }}>
                    <h1>{item.produto.nome}</h1>
                    <p>{item.produto.descricao}</p>
                  </div>
                </div>
              </td>
              <td width="10%" className="align-middle text-center">
              R$ {item.produto.preco.toLocaleString("pt-BR", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                    useGrouping: true,
                  })}
              </td>

              <td width="10%" className="align-middle text-center">
                <div id="botao-maismenos">
                  <div  id="menosmais" onClick={() => handleQuantidadeChange(item, item.quantidade - 1)}><FaMinus /></div>
                  <div id="quantidade">{item.quantidade}</div>
                  <div id="menosmais" onClick={() => handleQuantidadeChange(item, item.quantidade + 1)}><FaPlus /></div>
                </div>
              </td>
              <td width="10%" className="align-middle text-center">
              R$ {`${(item.quantidade * item.produto.preco).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}`}
              </td>
              
              <td width="10%" className="align-middle text-center">
                <button className='btn btn-danger' onClick={() => tratarRemocaoDeItem(item.id)}style={{borderRadius:'0px', backgroundColor:'rgba(255, 0, 0, 0.979)'}}>REMOVER</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td width="10%" className="align-middle text-center">Total do Carrinho</td>
            <td width="10%" className="align-middle text-center">R$ {precoTotalCarrinho.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default CarrinhoPage;