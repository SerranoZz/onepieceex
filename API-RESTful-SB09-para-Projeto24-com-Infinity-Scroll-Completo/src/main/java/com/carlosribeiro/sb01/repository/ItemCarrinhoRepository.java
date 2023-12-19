package com.carlosribeiro.sb01.repository;

import com.carlosribeiro.sb01.model.ItemCarrinho;
import com.carlosribeiro.sb01.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ItemCarrinhoRepository extends JpaRepository<ItemCarrinho, Long> {
    @Query("select i from ItemCarrinho i left outer join fetch i.carrinho order by i.id")
    List<ItemCarrinho> recuperarItensPorCarrinho();

    @Query("SELECT ic, p FROM ItemCarrinho ic LEFT JOIN ic.produto p ORDER BY p.id")
    List<Produto> recuperarProdutosComCategoria();
}
