package com.carlosribeiro.sb01.service;

import com.carlosribeiro.sb01.exception.EntidadeDestacadaException;
import com.carlosribeiro.sb01.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.sb01.exception.EntidadeTransienteException;
import com.carlosribeiro.sb01.model.Produto;
import com.carlosribeiro.sb01.repository.ProdutoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.function.Supplier;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> recuperarProdutos() {
        return produtoRepository.recuperarProdutosComCategoria();
    }

    public List<Produto> recuperarProdutosEmItensCarrinho(){
        return produtoRepository.recuperarProdutosEmItensCarrinho();
    }

    public Produto cadastrarProduto(Produto produto) {
        if(produto.getId() == null) {
            return produtoRepository.save(produto);
        }
        else {
            throw new EntidadeDestacadaException("Tentando cadastrar um objeto destacado");
        }
    }

//    public Produto alterarProduto(Produto produto) {
//        if (produto.getId() != null) {
//            Supplier<EntidadeNaoEncontradaException> sup =
//                    () -> new EntidadeNaoEncontradaException("Produto não encontrado.");
//            produtoRepository.findById(produto.getId())
//                    .orElseThrow(sup);
//            return produtoRepository.save(produto);
//        }
//        else {
//            throw new EntidadeTransienteException("Tentando alterar um objeto transiente.");
//        }
//    }

    @Transactional
    public Produto alterarProduto(Produto produto) {
        if (produto.getId() != null) {
//          produtoRepository.recuperarProdutoPorIdComLock(produto.getId())
            produtoRepository.findById(produto.getId())
                    .orElseThrow(
                            () -> new EntidadeNaoEncontradaException("Produto não encontrado."));
            return produtoRepository.save(produto);
        }
        else {
            throw new EntidadeTransienteException("Tentando alterar um objeto transiente.");
        }
    }

//    @Transactional
//    public Produto alterarProduto(Produto produto) {
//        if (produto.getId() != null) {
//            Produto umProduto = produtoRepository.findById(produto.getId())
//                    .orElseThrow(
//                            () -> new EntidadeNaoEncontradaException("Produto não encontrado."));
//            umProduto.setNome(produto.getNome());
//            umProduto.setPreco(produto.getPreco());
//            umProduto.setDataCadastro(produto.getDataCadastro());
//            umProduto.setCategoria(produto.getCategoria());
//            return umProduto;
//        }
//        else {
//            throw new EntidadeTransienteException("Tentando alterar um objeto transiente.");
//        }
//    }

    public void removerProduto(Long id) {
        produtoRepository.deleteById(id);
    }

    @GetMapping
    public Produto recuperarProdutoPorId(Long id) {
        return produtoRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Produto número " + id + " não encontrado"));
    }

    public List<Produto> recuperarProdutoDeUmaCategoriaPorId(Long id) {
        return produtoRepository.findByCategoriaId(id);
    }


    public List<Produto> recuperarProdutosPorIdCategoria(Long id) {
        return produtoRepository.findByCategoriaId(id);
    }

    public List<Produto> recuperarProdutosPorSlugDaCategoria(String slug) {
        return produtoRepository.findByCategoriaSlug(slug);
    }

    public Page<Produto> recuperarProdutosPorSlugDaCategoriaComPaginacao(String slug, Pageable pageable) {
        if (!slug.isEmpty())
            return produtoRepository.recuperarProdutosPorSlugDaCategoriaComPaginacao(slug, pageable);
        else
            return produtoRepository.recuperarProdutosComPaginacao(pageable);
    }

    public Page<Produto> recuperarProdutosPaginados(String nome, Pageable pageable) {
        return produtoRepository.recuperarProdutosPaginados(nome, pageable);
    }
}
