
package com.carlosribeiro.sb01.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class ItemCarrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Min(value=1, message = "A 'Quantidade em estoque' deve ser maior ou igual a 1.")
    private int quantidade;

    @ManyToOne
    @JoinColumn(name = "produto_id")
    private Produto produto;

    @ManyToOne
    private Carrinho carrinho;

    public ItemCarrinho(int quantidade, Produto produto, Carrinho carrinho){
        this.quantidade = quantidade;
        this.produto = produto;
        this.carrinho = carrinho;
    }
}
