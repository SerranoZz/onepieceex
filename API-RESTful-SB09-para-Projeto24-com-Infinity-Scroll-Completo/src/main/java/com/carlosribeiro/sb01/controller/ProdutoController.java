package com.carlosribeiro.sb01.controller;

import com.carlosribeiro.sb01.model.Produto;
import com.carlosribeiro.sb01.service.CategoriaService;
import com.carlosribeiro.sb01.service.ProdutoService;
import com.carlosribeiro.sb01.util.ResultadoPaginado;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("produtos")   // http://localhost:8080/produtos
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    public List<Produto> recuperarProdutos() {
        return produtoService.recuperarProdutos();
    }

    @GetMapping("/em-itens-carrinho")
    public List<Produto> recuperarProdutosEmItensCarrinho() {
        return produtoService.recuperarProdutosEmItensCarrinho();
    }


    @PostMapping
    public Produto cadastrarProduto(@RequestBody Produto produto) {
        System.out.println("Servidor recebeu a requisição.");
        categoriaService.recuperarCategoriaPorId(produto.getCategoria().getId());
        return produtoService.cadastrarProduto(produto);
    }

    @PutMapping
    public Produto alterarProduto(@RequestBody Produto produto) {
        return produtoService.alterarProduto(produto);
    }

    // http://localhost:8080/produtos/1
    @DeleteMapping("{idProduto}")
    public Produto removerProduto(@PathVariable("idProduto") Long id) {
        Produto produto = produtoService.recuperarProdutoPorId(id);
        produtoService.removerProduto(id);
        return produto;
    }

    // http://localhost:8080/produtos/1
    @GetMapping("{idProduto}")
    public Produto recuperarProdutoPorId(@PathVariable("idProduto") Long id) {
        return produtoService.recuperarProdutoPorId(id);
    }

    // http://localhost:8080/produtos/categoria/1/televisor
    @GetMapping("categoria/{idProduto}/{slug}")
    public List<Produto> recuperarProdutosDeUmaCategoriaPorId(@PathVariable("idProduto") Long id,
                                                              @PathVariable("slug") String slug) {
        return produtoService.recuperarProdutoDeUmaCategoriaPorId(id);
    }

    // http://localhost:8080/produtos/categoria?idCategoria=1&slug=televisor
    @GetMapping("categoria")
    public List<Produto> recuperarProdutosPorIdCategoria(@RequestParam("idCategoria") Long id,
                                                         @RequestParam("slug") String slug) {
        return produtoService.recuperarProdutosPorIdCategoria(id);
    }

    @GetMapping("categoria/{slugCategoria}")         // http://localhost:8080/produtos/categoria/frutas
    public List<Produto> recuperarProdutosPorSlugDaCategoria(@PathVariable("slugCategoria") String slug) {
        return produtoService.recuperarProdutosPorSlugDaCategoria(slug);
    }

    // http://localhost:8080/produtos/categoria/paginacao?slugCategoria=frutas&pagina=0
    // http://localhost:8080/produtos/categoria/paginacao?pagina=0
    @GetMapping("categoria/paginacao")
    public ResultadoPaginado<Produto> recuperarProdutosPorSlugDaCategoriaComPaginacao(
            @RequestParam(name="slugCategoria", defaultValue = "") String slug,
            @RequestParam(name="pagina", defaultValue = "0") int pagina,
            @RequestParam(name="tamanho", defaultValue = "3") int tamanho
    ) {
        Pageable pageable = PageRequest.of(pagina, tamanho);
        Page<Produto> paginaDeProduto = produtoService
                .recuperarProdutosPorSlugDaCategoriaComPaginacao(slug, pageable);
        ResultadoPaginado<Produto> resultadoPaginado = new ResultadoPaginado<>(
                paginaDeProduto.getTotalElements(),
                paginaDeProduto.getTotalPages(),
                paginaDeProduto.getNumber(),
                paginaDeProduto.getContent());
        return resultadoPaginado;
    }

    @GetMapping("paginacao")   // http://localhost:8080/produtos/paginacao?pagina=0&tamanho=5
    public ResultadoPaginado<Produto> recuperarProdutosPaginados(
            @RequestParam(name="pagina", defaultValue = "0") int pagina,
            @RequestParam(name="tamanho", defaultValue = "3") int tamanho,
            @RequestParam(name="nome", defaultValue = "") String nome
    ) {
        Pageable pageable = PageRequest.of(pagina, tamanho);
        Page<Produto> paginaDeProduto = produtoService.recuperarProdutosPaginados(nome, pageable);
        ResultadoPaginado<Produto> resultadoPaginado = new ResultadoPaginado<>(
                paginaDeProduto.getTotalElements(),
                paginaDeProduto.getTotalPages(),
                paginaDeProduto.getNumber(),
                paginaDeProduto.getContent());
        return resultadoPaginado;
    }
}
