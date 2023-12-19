package com.carlosribeiro.sb01.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "A 'Imagem' deve ser informada.")
    private String imagem;

    @NotEmpty(message = "O 'Nome' deve ser informado.")
    private String nome;

    @NotEmpty(message = "A 'Descrição' deve ser informada.")
    private String descricao;

    private boolean disponivel;

    @Min(value=1, message = "A 'Quantidade em estoque' deve ser maior ou igual a 1.")
    private int qtdEstoque;

    @NotNull(message = "O 'Preço' deve ser informado.")
    @DecimalMin(inclusive = true, value="0.1", message = "O 'Preço' deve ser maior ou igual a 0,1.")
    private BigDecimal preco;

    @NotNull(message = "A 'Data de Cadastro' deve ser informada.")
    @Column(name = "DATA_CADASTRO")
    private LocalDate dataCadastro;

    @ManyToOne
    // @JoinColumn(name = "CATEGORIA_ID", foreignKey = @ForeignKey(name="CATEGORIA_PRODUTO_CATEGORIA_ID_FK"))
    private Categoria categoria;


    public Produto(String imagem,
                   Categoria categoria,
                   String nome,
                   String descricao,
                   boolean disponivel,
                   LocalDate dataCadastro,
                   int qtdEstoque,
                   BigDecimal preco) {
        this.imagem = imagem;
        this.categoria = categoria;
        this.nome = nome;
        this.descricao = descricao;
        this.disponivel = disponivel;
        this.dataCadastro = dataCadastro;
        this.qtdEstoque = qtdEstoque;
        this.preco = preco;
    }
}
