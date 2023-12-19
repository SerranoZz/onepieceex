package com.carlosribeiro.sb01.service;

import com.carlosribeiro.sb01.exception.EntidadeDestacadaException;
import com.carlosribeiro.sb01.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.sb01.exception.EntidadeTransienteException;
import com.carlosribeiro.sb01.model.Categoria;
import com.carlosribeiro.sb01.model.Produto;
import com.carlosribeiro.sb01.repository.CategoriaRepository;
import com.carlosribeiro.sb01.repository.ProdutoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Categoria> recuperarCategorias() {
        return categoriaRepository.findAll(Sort.by("id"));
    }

    public Categoria recuperarCategoriaPorId(Long id) {
        return categoriaRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Categoria número " + id + " não encontrada."));
    }
}
