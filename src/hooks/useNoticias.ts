import Noticia from "../interfaces/noticias";

const noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Mensagem do Oda na Jump festa 2024',
      texto: 'O Domingo Mágico Chegou!!! Já cedo, avisamos do remake de One Piece que será feito nesta notícia. Agora traremos mais anúncios que tivemos hoje. Confiram!!!O Domingo Mágico Chegou!!! Já cedo, avisamos do remake de One Piece que será feito nesta notícia. Agora traremos mais anúncios que tivemos hoje. Confiram!!!',
      imagem: 'https://media.techtribune.net/uploads/2021/09/one-piece-milestone.png',
      data_cadastro: '17 de dezembro de 2023',
    },

    {
      id: 2,
      titulo: 'REMAKE DE ONE PIECE É ANUNCIADO PELO STUDIO WIT',
      texto: 'No 25º aniversário de One Piece. Vem aí THE ONE PIECE, uma nova animação que vai recriar a história do mangá, começando da saga East Blue e produzida pelo WIT Studio....',
      imagem: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/12/one-piece-remake.png?w=682',
      data_cadastro: '16 de dezembro de 2023',
    },

    {
      id: 3,
      titulo: 'É Revelado Poster de Monsters',
      texto: 'A Netflix revelou um novo visual, imagens dos personagens e o mês de estreia na Netflix para janeiro de 2024 da adaptação do especial Monsters. Em inglês o título ficou "Monsters: 103 Mercies Dragon Damnation. Em japones Mons...',
      imagem: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/12/mosters_anime_netflix__eb2ypqis8-1210x544.jpg',
      data_cadastro: '15 de dezembro de 2023',
    },

    {
      id: 4,
      titulo: 'One Piece no Futebol Americano',
      texto: 'No dia 3 de dezembro, um jogo colaborativo “LOS ANGELES RAMS E ONE PIECE Day" foi realizado entre "LOS ANGELES RAMS", um time de futebol americano com sede em Los Angeles, Califórnia, e "ONE PIECE". Esta é a primeira vez que u...',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YeZwprmEbRrxI4KpH-cunw8-ohVqm7-ltMR85N8vT21p05Lt49nqop_47jEHUK2UFF4&usqp=CAU',
      data_cadastro: '13 de dezembro de 2023',
    },

    {
      id: 5,
      titulo: "Panini lançará paródia de One Piece com Chico Bento em 'Turma da Mônica'",
      texto: "O universo de One Piece é TÃO gigantesco que agora estamos descobrindo o  multiverso.  A editora Panini anunciou em seu painel da CCXP 2023 (03, domingo) que publicará uma HQ do Chico Bento, de 'Turma da Mônica', que parod...",
      imagem: 'https://cdn.ome.lt/o6XP8aaIg1RLxv2PhzCaw4FxGuw=/570x0/smart/uploads/conteudo/fotos/GAhBZlUXsAAClYM.jpeg',
      data_cadastro: '8 de dezembro de 2023',
    },

    {
      id: 6,
      titulo: "News World 242 - As principais noticias e curiosidades do mundo de One Piece no mês de novembro...",
      texto: "Nesse mês tivemos várias notícias e um flashback incrível do Kuma, seja na parte de drama, seja na parte de ligações com o mundo de One Piece, seja em ganchos para o futuro de obra, o uma parceria de One Pice com a Chilli Be...",
      imagem: 'https://geekdama.com.br/wp-content/uploads/2022/03/one-piece-news-coo-postcover.jpg',
      data_cadastro: '30 de novembro de 2023',
    },
    
];

const useNoticias = () => noticias;
export default useNoticias;