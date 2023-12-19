package com.carlosribeiro.sb01.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@JsonIgnoreProperties(value = {"itens"})
@Data
@NoArgsConstructor
@Entity

public class Carrinho {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "A 'Data de Criação' deve ser informada.")
    @Column(name = "DATA_CRIACAO")
    private LocalDate dataCriacao;

    @OneToMany(mappedBy = "carrinho")
    private List<ItemCarrinho> itens;

    public Carrinho(LocalDate dataCriacao){
        this.dataCriacao = dataCriacao;
    }

}
