package com.carlosribeiro.sb01.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(value = {"produtos"})
@Data
@NoArgsConstructor
@Entity
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String slug;

    @OneToMany(mappedBy = "categoria")
    private List<Produto> produtos;

    public Categoria(String nome, String slug) {
        this.nome = nome;
        this.slug = slug;
        this.produtos = new ArrayList<>();
    }
}
