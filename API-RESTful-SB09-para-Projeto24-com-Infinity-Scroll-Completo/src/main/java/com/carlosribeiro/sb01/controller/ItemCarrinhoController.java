package com.carlosribeiro.sb01.controller;

import com.carlosribeiro.sb01.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.sb01.model.ItemCarrinho;
import com.carlosribeiro.sb01.model.Produto;
import com.carlosribeiro.sb01.service.ItemCarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("itens")
public class ItemCarrinhoController {
    @Autowired
    private ItemCarrinhoService itemCarrinhoService;

    @GetMapping
    public List<ItemCarrinho> recuperarItens() {
        return itemCarrinhoService.recuperarItensPorCarrinho();
    }
    //http://localhost:8080/itens/1

    @PostMapping
    public ItemCarrinho adicionarItem(@RequestBody ItemCarrinho itemCarrinho) {
        System.out.println("Servidor recebeu a requisição.");
        return itemCarrinhoService.adicionarItem(itemCarrinho);
    }

    @PutMapping
    public ItemCarrinho alterarItem(@RequestBody ItemCarrinho itemCarrinho) {
        return itemCarrinhoService.alterarItem(itemCarrinho);
    }

    @GetMapping("{idItemCarrinho}")
    public ItemCarrinho recuperarItemPorId(@PathVariable("idItemCarrinho") Long id) {
        return itemCarrinhoService.recuperarItensPorId(id);
    }

    @DeleteMapping("{idItemCarrinho}")
    public ItemCarrinho removerItem(@PathVariable("idItemCarrinho") Long id) {
        ItemCarrinho item = itemCarrinhoService.recuperarItensPorId(id);
        itemCarrinhoService.removerItem(id);
        return item;
    }
}
