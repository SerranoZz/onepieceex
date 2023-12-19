package com.carlosribeiro.sb01.repository;

import com.carlosribeiro.sb01.model.Carrinho;

import org.springframework.data.jpa.repository.JpaRepository;
public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {

}