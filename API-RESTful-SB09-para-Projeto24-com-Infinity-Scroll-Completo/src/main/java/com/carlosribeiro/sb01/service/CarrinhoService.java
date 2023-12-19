package com.carlosribeiro.sb01.service;

import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.repository.CarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CarrinhoService {

    @Autowired
    private CarrinhoRepository carrinhoRepository;

    public List<Carrinho> recuperarCarrinho(){
        return carrinhoRepository.findAll(Sort.by("id"));
    }
}
