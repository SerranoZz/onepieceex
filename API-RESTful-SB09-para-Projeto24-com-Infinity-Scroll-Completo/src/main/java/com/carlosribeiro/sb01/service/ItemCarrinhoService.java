package com.carlosribeiro.sb01.service;

import com.carlosribeiro.sb01.exception.EntidadeDestacadaException;
import com.carlosribeiro.sb01.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.sb01.exception.EntidadeTransienteException;
import com.carlosribeiro.sb01.model.ItemCarrinho;
import com.carlosribeiro.sb01.model.Produto;
import com.carlosribeiro.sb01.repository.ItemCarrinhoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class ItemCarrinhoService {
    @Autowired
    private ItemCarrinhoRepository itemCarrinhoRepository;

    public List<ItemCarrinho> recuperarItensPorCarrinho() {
        return itemCarrinhoRepository.recuperarItensPorCarrinho();
    }

    public ItemCarrinho adicionarItem(ItemCarrinho itemCarrinho) {
        if(itemCarrinho.getId() == null) {
            return itemCarrinhoRepository.save(itemCarrinho);
        }
        else {
            throw new EntidadeDestacadaException("Tentando cadastrar um objeto destacado");
        }
    }

    @Transactional
    public ItemCarrinho alterarItem(ItemCarrinho itemCarrinho) {
        if (itemCarrinho.getId() != null) {
            itemCarrinhoRepository.findById(itemCarrinho.getId())
                    .orElseThrow(
                            () -> new EntidadeNaoEncontradaException("Item não encontrado."));

            return itemCarrinhoRepository.save(itemCarrinho);
        }
        else {
            throw new EntidadeTransienteException("Tentando alterar um objeto transiente.");
        }
    }

    public void removerItem(Long id) {
        itemCarrinhoRepository.deleteById(id);
    }

    @GetMapping
    public ItemCarrinho recuperarItensPorId(Long id) {
        return itemCarrinhoRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Item número " + id + " não encontrado"));
    }

}

