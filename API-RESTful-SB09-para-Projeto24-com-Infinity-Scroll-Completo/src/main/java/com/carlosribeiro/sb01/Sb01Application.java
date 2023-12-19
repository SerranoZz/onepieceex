package com.carlosribeiro.sb01;

import com.carlosribeiro.sb01.controller.ItemCarrinhoController;
import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.Categoria;
import com.carlosribeiro.sb01.model.ItemCarrinho;
import com.carlosribeiro.sb01.model.Produto;
import com.carlosribeiro.sb01.repository.CarrinhoRepository;
import com.carlosribeiro.sb01.repository.CategoriaRepository;
import com.carlosribeiro.sb01.repository.ItemCarrinhoRepository;
import com.carlosribeiro.sb01.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@SpringBootApplication
public class Sb01Application implements CommandLineRunner {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private CategoriaRepository categoriaRepository;

	@Autowired
	private CarrinhoRepository carrinhoRepository;

	@Autowired
	private ItemCarrinhoRepository itemCarrinhoRepository;

	@Autowired
	private ItemCarrinhoController itemCarrinhoController;



	public static void main(String[] args) {
		SpringApplication.run(Sb01Application.class, args);
	}
	@Override
	public void run(String... args) throws Exception {

		Categoria mangas = new Categoria("Mangás", "mangas");
		categoriaRepository.save(mangas);
		Categoria ac = new Categoria("Action Figures", "actionfigures");
		categoriaRepository.save(ac);

		Carrinho carrinho = new Carrinho(LocalDate.of(2023, 4, 26));
		carrinhoRepository.save(carrinho);

		Produto produto = new Produto(
				"https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_epdgn1agb91u1frlvdfv1bah6a/-S897-FWEBP",
				mangas,
				"VOLUME 9",
				"Volume 9 do Mangá de One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(34.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/w/o/works_monkey.d.luffy.jpg",
				ac,
				"MONKEY D. LUFFY",
				"Action Figure do personagem Monkey D. Luffy do anime One Piece",
				true,
				LocalDate.of(2023, 4, 26),
				100,
				BigDecimal.valueOf(1056.00));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/l/u/luffy_gear_4_battle-min.jpg",
				ac,
				"MONKEY D. LUFFY (GEAR 4)",
				"Action Figure do personagem Monkey D. Luffy no seu GEAR 4 do anime One Piece",
				true,
				LocalDate.of(2023, 4, 26),
				100,
				BigDecimal.valueOf(1056.00));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://osupernerd.com/cdn/shop/files/Sf9fa46245eda4dc9b2daf2d9ea9923090_1_600x.png?v=1691601695",
				ac,
				"MONKEY D. LUFFY (GEAR 5)",
				"Action Figure do personagem Monkey D. Luffy no seu GEAR 5 do anime One Piece",
				true,
				LocalDate.of(2023, 4, 26),
				100,
				BigDecimal.valueOf(1056.00));
		produtoRepository.save(produto);


		produto = new Produto(
				"https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_fim7mo5d856sp16b4ba0oa9k34/-S897-FWEBP",
				mangas,
				"VOLUME 10",
				"Volume 10 do Mangá de One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(34.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://down-br.img.susercontent.com/file/05e193e512b04be0b19a1d31dfc44893",
				ac,
				"PORTGAS D. ACE",
				"Action Figure do personagem Portgas D. Ace do anime One Piece",
				true,
				LocalDate.of(2023, 4, 26),
				100,
				BigDecimal.valueOf(1056.00));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/r/o/roronoa_zoro_2-min.jpg",
				ac,
				"RORONOA ZORO",
				"Action Figure do personagem Roronoa Zoro do anime One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(820.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://m.media-amazon.com/images/I/61PRgkkQtiL._SY445_SX342_.jpg",
				mangas,
				"VOLUME 8",
				"Volume 8 do Mangá de One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(34.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://storage.geralgeek.com.br/images/venda/One-Piece-Red-DXF-The-Grandline-Lady-Vol--3-Nami-19179-64e7984c2cd35.webp",
				ac,
				"NAMI",
				"Action Figure da personagem Nami do anime One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(365.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://www.lojatoyscollections.com.br/cdn/shop/products/usopp-wanokuni-dxf-the-grand-line-men-vol-6-one-piece-banpresto_1_1200_1024x1024.jpg?v=1620164709",
				ac,
				"DEUS USOPP",
				"Action Figure do personagem Usopp do anime One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(620.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://uatari.com.br/wp-content/uploads/2023/11/15228616686_UAAF-079-3.jpg",
				ac,
				"VINSMOKE SANJI",
				"Action Figure do personagem Vinsmoke Sanji do anime One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(810.90));
		produtoRepository.save(produto);


		produto = new Produto(
				"https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_3odjie6c2p2uteep5q1mfm4d3b/-S897-FWEBP",
				mangas,
				"VOLUME 5",
				"Volume 5 do Mangá de One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(34.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://down-br.img.susercontent.com/file/6be079395c7adf47afa270e02c9e3cf1",
				ac,
				"CHOPPER",
				"Action Figure do personagem Chopper do anime One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(810.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://storage.geralgeek.com.br/images/venda/style-643f15ed2f516.webp",
				ac,
				"NICO ROBIN",
				"Action Figure da personagem Nico Robin do anime One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(730.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/f/r/franky1-min.jpg",
				ac,
				"FRANKY",
				"Action Figure do personagem Franky do anime One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(383.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_jq4jnj4tkh325cmpoo2das5o3t/-S897-FWEBP",
				mangas,
				"VOLUME 6",
				"Volume 6 do Mangá de One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(34.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/o/n/one_piece_-_brook_1-min.jpg",
				ac,
				"BROOK",
				"Action Figure do personagem Brook do anime One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(383.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/j/i/jinbe_1-min.jpg",
				ac,
				"JINBE",
				"Action Figure do personagem Jinbe do anime One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(538.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/s/h/shanks_1-min_1.jpg",
				ac,
				"SHANKS",
				"Action Figure do personagem Shanks do anime One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(278.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://m.media-amazon.com/images/I/91-ZFbM2I-L._SY466_.jpg",
				mangas,
				"VOLUME 7",
				"Volume 7 do Mangá de One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(34.90));
		produtoRepository.save(produto);


		produto = new Produto(
				"https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/y/a/yamato1-min.jpg",
				ac,
				"YAMATO",
				"Action Figure do personagem Yamato do anime One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(249.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://m.media-amazon.com/images/I/516DQXjDcML._SY445_SX342_.jpg",
				mangas,
				"VOLUME 1",
				"Volume 1 do Mangá de One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(34.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://m.media-amazon.com/images/I/61Prf2b9GRL._SY445_SX342_.jpg",
				mangas,
				"VOLUME 2",
				"Volume 2 do Mangá de One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(34.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://m.media-amazon.com/images/I/51rgk+G0qKL._SY445_SX342_.jpg",
				mangas,
				"VOLUME 3",
				"Volume 3 do Mangá de One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(34.90));
		produtoRepository.save(produto);

		produto = new Produto(
				"https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_g7q16kopjl6rpd11h42eaase1m/-S897-FWEBP",
				mangas,
				"VOLUME 4",
				"Volume 4 do Mangá de One Piece",
				true,
				LocalDate.of(2023, 12, 19),
				100,
				BigDecimal.valueOf(34.90));
		produtoRepository.save(produto);







	}
}
