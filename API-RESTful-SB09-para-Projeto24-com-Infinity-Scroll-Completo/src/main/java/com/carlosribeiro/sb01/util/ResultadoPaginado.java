package com.carlosribeiro.sb01.util;

import com.carlosribeiro.sb01.model.Produto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@AllArgsConstructor
@Getter
@ToString
public class ResultadoPaginado<T> {
    private long totalDeItens;
    private int totalDePaginas;
    private int paginaCorrente;
    private List<T> itens;
}
