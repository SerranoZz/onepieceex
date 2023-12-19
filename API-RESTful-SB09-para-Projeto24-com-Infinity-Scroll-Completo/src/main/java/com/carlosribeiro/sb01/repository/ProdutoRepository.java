package com.carlosribeiro.sb01.repository;

import com.carlosribeiro.sb01.model.Produto;
import jakarta.persistence.LockModeType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

    @Query("select p from Produto p left outer join fetch p.categoria order by p.id")
    List<Produto> recuperarProdutosComCategoria();

    @Query("SELECT p FROM ItemCarrinho ic JOIN ic.produto p ORDER BY p.id")
    List<Produto> recuperarProdutosEmItensCarrinho();

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select p from Produto p left outer join fetch p.categoria where p.id = :id")
    Optional<Produto> recuperarProdutoPorIdComLock(Long id);

    List<Produto> findByCategoriaId(Long id);

    @Query("select p from Produto p left join fetch p.categoria c where c.slug = :slug order by p.id desc")
    List<Produto> findByCategoriaSlug(String slug);

    @Query(
            value = "select p from Produto p left join fetch p.categoria where p.nome like %:nome% order by p.id desc",
            countQuery = "select count(p) from Produto p where p.nome like %:nome%"
    )
    Page<Produto> recuperarProdutosPaginados(String nome, Pageable pageable);

    @Query(
            value = "select p from Produto p left join fetch p.categoria c where c.slug=:slug order by p.nome asc",
            countQuery = "select count(p) from Produto p left join p.categoria c where c.slug=:slug"
    )
    Page<Produto> recuperarProdutosPorSlugDaCategoriaComPaginacao(String slug, Pageable pageable);

    @Query(
            // Muito importante efetuar a busca de produtos com join fetch para categoria para
            // evitar que para cada produto seja recuperada a respectiva categoria.
            value = "select p from Produto p left join fetch p.categoria order by p.nome asc",
            countQuery = "select count(p) from Produto p"
    )
    Page<Produto> recuperarProdutosComPaginacao(Pageable pageable);
}
