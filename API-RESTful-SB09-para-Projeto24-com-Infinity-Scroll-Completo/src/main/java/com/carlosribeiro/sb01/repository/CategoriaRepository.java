package com.carlosribeiro.sb01.repository;

import com.carlosribeiro.sb01.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

}
