package com.carlosribeiro.sb01.controller;

import com.carlosribeiro.sb01.model.Categoria;
import com.carlosribeiro.sb01.model.Produto;
import com.carlosribeiro.sb01.service.CategoriaService;
import com.carlosribeiro.sb01.service.ProdutoService;
import com.carlosribeiro.sb01.util.ResultadoPaginado;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("categorias")   // http://localhost:8080/categorias
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    public List<Categoria> recuperarCategorias() {
        return categoriaService.recuperarCategorias();
    }
}
