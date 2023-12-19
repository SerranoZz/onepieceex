import { NavLink } from 'react-router-dom';
import capa from '/volume1.jpg';
import Volume from '../interfaces/volume';

interface Props {
    noticias: Volume[];
}

const VolumesPage = ({volumes}: Props) => {
    return (
      <>
        <div className="container">
        <div className="ep-text">
            <h1>TODOS OS VOLUMES DE ONE PIECE</h1>
            <p style={{fontSize: '16px'}}>Todos os volumes de One Piece traduzidos para Português!</p>
        </div>

        <div className="accordion" id="id-accordion">
            <div className="card mb-3">
               <div className="card-header" id="id-header-volume1"> 
                  <h5 className="mb-0">
                     <a href="#id-volume1" 
                        data-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="id-volume1">
                        VOLUME 1 - ROMANCE DAWN
                     </a>
                  </h5>
               </div>
                <div id="id-volume1" className="collapse"
                    data-parent="#id-accordion"
                    aria-labelledby="id-header-volume1">
                    <div className="card-body row" id="style-volume">
                        <div className="col-lg-8">
                            <p className="text-justify ">
                                <b>RESENHA OFICIAL:</b> A TRIPULAÇÃO PIRATA MAIS FAMOSA DOS QUADRINHOS FINALMENTE JOGA SUA ÂNCORA DE NOVO NO BRASIL! COM ROTEIRO E ARTE DE EIICHIRO ODA, O MANGÁ DE MAIOR SUCESSO DE TODOS OS TEMPOS RETORNA AO PAÍS, AGORA SOB A BANDEIRA PLANET MANGÁ! PARA SER O REI DOS PIRATAS, LUFFY, O HOMEM-BORRACHA, PRECISA REUNIR UMA TRIPULAÇÃO E ENCONTRAR O MAIOR DE TODOS OS TESOUROS. NO CAMINHO, ENFRENTARÁ A MARINHA, MONSTROS, E MUITOS OUTROS PIRATAS QUE TÊM O MESMO OBJETIVO. ENTÃO PREPARE-SE PRA ENCARAR OS PERIGOS DOS MARES. A MAIOR AVENTURA DE TODAS VAI RECOMEÇAR!
                            </p>
    
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">001. O INÍCIO DAS AVENTURAS</li>
                                <li className="list-group-item">002. MUGIWARA NO LUFFY</li>
                                <li className="list-group-item">003. CAÇADOR DE PIRATAS, ZORO</li>
                                <li className="list-group-item">004. TENENTE DA MARINHA, AXE ARM MORGAN</li>
                                <li className="list-group-item">005. O REI DOS PIRATAS E O MAIOR ESPADACHIM</li>
                                <li className="list-group-item">006. PRIMEIRO MEMBRO</li>
                                <li className="list-group-item">007. AMIGOS</li>
                                <li className="list-group-item">008. NAMI APARECE</li>
                            </ul>
                        </div>
                        <img src={'https://m.media-amazon.com/images/I/516DQXjDcML._SY445_SX342_.jpg'} className="col-lg-4" alt="Capa Volume 1" style={{maxHeight: '540px'}}/>
                    </div>
                </div>

                
            </div>

            <div className="card mb-3">
                <div className="card-header" id="id-header-volume2">
                   <h5 className="mb-0">
                      <a href="#id-volume2" 
                         data-toggle="collapse"
                         aria-expanded="true"
                         aria-controls="id-volume2">
                         VOLUME 2 - CONTRA A TRIPULAÇÃO DE BUGGY, O PIRATA
                      </a>
                   </h5>
                </div>
                <div id="id-volume2" className="collapse"
                    data-parent="#id-accordion"
                    aria-labelledby="id-header-volume2">
                    <div className="card-body row" id="style-volume">
                        <div className="col-lg-8">
                            <p className="text-justify ">
                                <b>RESENHA OFICIAL:</b>-
                            </p>
    
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">009. MULHER DEMÔNIO</li>
                                <li className="list-group-item">010. O QUE ACONTECEU NO BAR?</li>
                                <li className="list-group-item">011. FUJA</li>
                                <li className="list-group-item">012. O CÃO</li>
                                <li className="list-group-item">013. TESOURO</li>
                                <li className="list-group-item">014. IMPRUDENTE!!</li>
                                <li className="list-group-item">015. GONG</li>
                                <li className="list-group-item">016. LUTA CONTRA OS PIRATAS DO BUGGY</li>
                                <li className="list-group-item">017. DIFERENÇA DE NÍVEL</li>
                            </ul>
                        </div>
                        <img src="https://m.media-amazon.com/images/I/61Prf2b9GRL._SY445_SX342_.jpg" className="col-lg-4" alt="Capa Volume 1" style={{maxHeight: '540px'}}/>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header" id="id-header-volume3">
                   <h5 className="mb-0">
                      <a href="#id-volume3" 
                         data-toggle="collapse"
                         aria-expanded="true"
                         aria-controls="id-volume3">
                         VOLUME 3 - COISAS QUE NÃO PODEM SER FINGIDAS
                      </a>
                   </h5>
                </div>
                <div id="id-volume3" className="collapse"
                    data-parent="#id-accordion"
                    aria-labelledby="id-header-volume3">
                    <div className="card-body row" id="style-volume">
                        <div className="col-lg-8">
                            <p className="text-justify ">
                                <b>RESENHA OFICIAL:</b> O PIRATA BUGGY REVELA O QUE O TORNA TÃO TEMIDO E CONTA AO LUFFY A SUA ÉPOCA DE JUVENTUDE AO LADO DE SHANKS! E A NAMI? SERÁ QUE LUFFY E ZORO CONSEGUIRÃO CONVENCÊ-LA A SE TORNAR A NAVEGADORA DELES?
                            </p>
    
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">018. BUGGY, O PALHAÇO-PIRATA</li>
                                <li className="list-group-item">019. AKUMA NO MI</li>
                                <li className="list-group-item">020. A FILOSOFIA DE UMA LADRA</li>
                                <li className="list-group-item">021. CIDADE</li>
                                <li className="list-group-item">022. ESPÉCIME RARA É VOCÊ</li>
                                <li className="list-group-item">023. CAPITÃO USOPP APARECE</li>
                                <li className="list-group-item">024. COISAS QUE NÃO PODEM SER FINGIDAS</li>
                                <li className="list-group-item">026. 800 MENTIRAS</li>
                                <li className="list-group-item">026. O PLANO DO CAPITÃO KURO</li>
                            </ul>
                        </div>
                        <img src="https://m.media-amazon.com/images/I/51rgk+G0qKL._SY445_SX342_.jpg" className="col-lg-4" alt="Capa Volume 1" style={{maxHeight: '540px'}}/>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header" id="id-header-volume4">
                   <h5 className="mb-0">
                      <a href="#id-volume4" 
                         data-toggle="collapse"
                         aria-expanded="true"
                         aria-controls="id-volume4">
                         VOLUME 4 - LUA CRESCENTE
                      </a>
                   </h5>
                </div>
                <div id="id-volume4" className="collapse"
                    data-parent="#id-accordion"
                    aria-labelledby="id-header-volume4">
                    <div className="card-body row" id="style-volume">
                        <div className="col-lg-8">
                            <p className="text-justify ">
                                <b>RESENHA OFICIAL:</b> LUFFY E SEUS COMPANHEIROS CHEGAM À VILA DE USOPP EM BUSCA DE UM NOVO NAVIO. MAS, POR UM ACASO, ELES DESCOBREM AS TERRÍVEIS INTENÇÕES DE UM PERIGOSO EX-CAPITÃO PIRATA DISFARÇADO DE MORDOMO!
                            </p>
    
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">027. INFORMAÇÃO TRASMITIDA</li>
                                <li className="list-group-item">028. NOITE DE LUA CRESCENTE</li>
                                <li className="list-group-item">029. A LADEIRA</li>
                                <li className="list-group-item">030. GREATH</li>
                                <li className="list-group-item">031. A VERDADE</li>
                                <li className="list-group-item">032. A PESSOA HORRÍVEL</li>
                                <li className="list-group-item">033. O HOMEM SILENCIOSO</li>
                                <li className="list-group-item">034. O MORDOMO, KLAHADOR</li>
                                <li className="list-group-item">035. UMA NOVA COLINA</li>
                            </ul>
                        </div>
                        <img src="https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_g7q16kopjl6rpd11h42eaase1m/-S897-FWEBP" className="col-lg-4" alt="Capa Volume 1" style={{maxHeight: '540px'}}/>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header" id="id-header-volume5">
                   <h5 className="mb-0">
                      <a href="#id-volume5" 
                         data-toggle="collapse"
                         aria-expanded="true"
                         aria-controls="id-volume5">
                         VOLUME 5 - PARA AQUELES A QUEM O SINO BATE
                      </a>
                   </h5>
                </div>
                <div id="id-volume5" className="collapse"
                    data-parent="#id-accordion"
                    aria-labelledby="id-header-volume5">
                    <div className="card-body row" id="style-volume">
                        <div className="col-lg-8">
                            <p className="text-justify ">
                                <b>RESENHA OFICIAL:</b> USOPP DECIDE DEFENDER SOZINHO SUA VILA E SUA AMIGA KAYA CONTRA O ATAQUE DO CAPITÃO KURO E SUA ANTIGA TRIPULAÇÃO! LUFFY, ZORO E NAMI NÃO VÃO PERDER ESSA BRIGA POR NADA!
                            </p>
    
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">036. SIGA-OS</li>
                                <li className="list-group-item">037. O PIRATA KURO, DE TODAS AS MANEIRAS</li>
                                <li className="list-group-item">038. BANDO PIRATA</li>
                                <li className="list-group-item">039. POR QUEM OS SINOS DOBRAM</li>
                                <li className="list-group-item">040. BANDO DE PIRATAS DO USSOP</li>
                                <li className="list-group-item">041. PARA O MAR</li>
                                <li className="list-group-item">042. YOSAKU E JOHNNY</li>
                                <li className="list-group-item">043. APRESENTANDO, SANJI</li>
                                <li className="list-group-item">044. OS TRÊS COZINHEIROS</li>
                            </ul>
                        </div>
                        <img src="https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_3odjie6c2p2uteep5q1mfm4d3b/-S897-FWEBP" className="col-lg-4" alt="Capa Volume 1" style={{maxHeight: '540px'}}/>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header" id="id-header-volume6">
                   <h5 className="mb-0">
                      <a href="#id-volume6" 
                         data-toggle="collapse"
                         aria-expanded="true"
                         aria-controls="id-volume6">
                         VOLUME 6 - O JURAMENTO
                      </a>
                   </h5>
                </div>
                <div id="id-volume6" className="collapse"
                    data-parent="#id-accordion"
                    aria-labelledby="id-header-volume6">
                    <div className="card-body row" id="style-volume">
                        <div className="col-lg-8">
                            <p className="text-justify ">
                                <b>RESENHA OFICIAL:</b> LUFFY CHEGOU AO RESTAURANTE FLUTUANTE BARATIE, QUERENDO UM COZINHEIRO EM SEU NAVIO, E DECIDIU QUE O MULHERENGO E BONDOSO SUBCHEFE DE COZINHA SANJI FARÁ PARTE DE SUA TRIPULAÇÃO. MAS, ANTES, TERÁ QUE CONVENCÊ-LO A SUBIR NO GOING MERRY E RESOLVER ALGUNS PROBLEMAS..
                            </p>
    
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">045. ANTES DA TEMPESTADE</li>
                                <li className="list-group-item">046. NÃO BEM VINDO</li>
                                <li className="list-group-item">047. DOM KREIG, ALMIRANTE PIRATA</li>
                                <li className="list-group-item">048. NÃO VÃO PARA A GRAND LINE</li>
                                <li className="list-group-item">049. TEMPESTADE</li>
                                <li className="list-group-item">050. MEU PRÓPRIO DESTINO</li>
                                <li className="list-group-item">051. RORONOA ZORO CAI NO PROFUNDO OCEANO</li>
                                <li className="list-group-item">052. O JURAMENTO</li>
                                <li className="list-group-item">053. PEQUENO PEIXE NÚMERO 1</li>
                            </ul>
                        </div>
                        <img src="https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_jq4jnj4tkh325cmpoo2das5o3t/-S897-FWEBP" className="col-lg-4" alt="Capa Volume 1" style={{maxHeight: '540px'}}/>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header" id="id-header-volume7">
                   <h5 className="mb-0">
                      <a href="#id-volume7" 
                         data-toggle="collapse"
                         aria-expanded="true"
                         aria-controls="id-volume7">
                         VOLUME 7 - VELHO PUM
                      </a>
                   </h5>
                </div>
                <div id="id-volume7" className="collapse"
                    data-parent="#id-accordion"
                    aria-labelledby="id-header-volume7">
                    <div className="card-body row" id="style-volume">
                        <div className="col-lg-8">
                            <p className="text-justify ">
                                <b>RESENHA OFICIAL:</b> O RESTAURANTE FLUTUANTE BARATIE ESTÁ SOB ATAQUE DO ALMIRANTE PIRATA DON KRIEG! MAS LUFFY, SANJI E OS COZINHEIROS DO MAR DEFENDERÃO O LEGADO DE ZEFF!!
                            </p>
    
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">054. SENHOR PEARL</li>
                                <li className="list-group-item">055. SANGUE SELVAGEM</li>
                                <li className="list-group-item">056. VÁ PRO INFERNO!</li>
                                <li className="list-group-item">057. ATRÁS DO SONHO</li>
                                <li className="list-group-item">058. VELHOTE DE MERDA</li>
                                <li className="list-group-item">059. OBRIGAÇÃO</li>
                                <li className="list-group-item">060. HONRA ESPECIAL</li>
                                <li className="list-group-item">061. DEMÔNIO</li>
                                <li className="list-group-item">062. MH5</li>
                            </ul>
                        </div>
                        <img src="https://m.media-amazon.com/images/I/91-ZFbM2I-L._SY466_.jpg" className="col-lg-4" alt="Capa Volume 1" style={{maxHeight: '540px'}}/>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header" id="id-header-volume8">
                   <h5 className="mb-0">
                      <a href="#id-volume8" 
                         data-toggle="collapse"
                         aria-expanded="true"
                         aria-controls="id-volume8">
                         VOLUME 8 - EU NÃO VOU MORRER
                      </a>
                   </h5>
                </div>
                <div id="id-volume8" className="collapse"
                    data-parent="#id-accordion"
                    aria-labelledby="id-header-volume8">
                    <div className="card-body row" id="style-volume">
                        <div className="col-lg-8">
                            <p className="text-justify ">
                                <b>RESENHA OFICIAL:</b> CHEGA A VEZ DE LUFFY ENFRENTAR O PODER DESTRUTIVO E A FAMOSA ARMADURA IMPENETRÁVEL DE DON KRIEG! ENQUANTO ISSO, NAMI PARTE NO ENCALÇO DE UMA MISTERIOSA FIGURA
                            </p>
    
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">063. NÃO MORRA</li>
                                <li className="list-group-item">064. ARMA SUPREMA</li>
                                <li className="list-group-item">065. PREPARAR</li>
                                <li className="list-group-item">066. A LANÇA DA MORTE</li>
                                <li className="list-group-item">067. SOPA</li>
                                <li className="list-group-item">068. QUARTO TRIPULANTE</li>
                                <li className="list-group-item">069. ARLONG PARK</li>
                                <li className="list-group-item">070. A GRANDE AVENTURA DE USOPP</li>
                                <li className="list-group-item">071. O CRIADOR</li>
                            </ul>
                        </div>
                        <img src="https://m.media-amazon.com/images/I/61PRgkkQtiL._SY445_SX342_.jpg" className="col-lg-4" alt="Capa Volume 1" style={{maxHeight: '540px'}}/>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header" id="id-header-volume9">
                   <h5 className="mb-0">
                      <a href="#id-volume9" 
                         data-toggle="collapse"
                         aria-expanded="true"
                         aria-controls="id-volume9">
                         VOLUME 9 - LÁGRIMAS
                      </a>
                   </h5>
                </div>
                <div id="id-volume9" className="collapse"
                    data-parent="#id-accordion"
                    aria-labelledby="id-header-volume9">
                    <div className="card-body row" id="style-volume">
                        <div className="col-lg-8">
                            <p className="text-justify ">
                                <b>RESENHA OFICIAL:</b> CADA UM DO BANDO DO CHAPÉU DE PALHA ESTÁ EM UM CANTO DA ILHA ONDE NAMI CRESCEU! DEPOIS DE TANTO DESENCONTRO, ELES CONSEGUEM SE REUNIR NOVAMENTE E DESCOBREM O QUEACONTECEU NO PASSADO DA COMPANHEIRA! ELES QUEREM LEVAR NAMI DE VOLTA, MAS ARLONG ESEU BANDO DE HOMENS-PEIXES NÃO VÃO DEIXAR!
                            </p>
    
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">072. ADEQUADO PARA O NÍVEL DE UM ALGUÉM</li>
                                <li className="list-group-item">073. UM MONSTRO DA GRAND LINE</li>
                                <li className="list-group-item">074. NEGÓCIOS</li>
                                <li className="list-group-item">075. CARTAS DE NAVEGAÇÃO E TRITÕES</li>
                                <li className="list-group-item">076. EU VOU DORMIR</li>
                                <li className="list-group-item">077. UM PASSO EM DIREÇÃO AO SONHO</li>
                                <li className="list-group-item">078. BELLEMERE-SAN</li>
                                <li className="list-group-item">079. VIVER</li>
                                <li className="list-group-item">080. UM PECADO É UM PECADO</li>
                                <li className="list-group-item">081. LÁGRIMAS</li>
                            </ul>
                        </div>
                        <img src="https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_epdgn1agb91u1frlvdfv1bah6a/-S897-FWEBP" className="col-lg-4" alt="Capa Volume 1" style={{maxHeight: '540px'}}/>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header" id="id-header-volume9">
                   <h5 className="mb-0">
                      <a href="#id-volume9" 
                         data-toggle="collapse"
                         aria-expanded="true"
                         aria-controls="id-volume9">
                         VOLUME 10 - OK, VAMOS FICAR DE PÉ!
                      </a>
                   </h5>
                </div>
                <div id="id-volume9" className="collapse"
                    data-parent="#id-accordion"
                    aria-labelledby="id-header-volume9">
                    <div className="card-body row" id="style-volume">
                        <div className="col-lg-8">
                            <p className="text-justify ">
                                <b>RESENHA OFICIAL:</b> FINALMENTE NAMI DEIXA O ORGULHO DE LADO E PEDE AJUDA AO LUFFY! ENTRETANTO, A LUTA CONTRA O BANDO DO ARLONGNÃO DARÁ MOLEZA!
                            </p>
    
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">082. CERTO, VAMOS NESSA!</li>
                                <li className="list-group-item">083. LUFFY COBERTO DE PRETO</li>
                                <li className="list-group-item">084. ZUMBI</li>
                                <li className="list-group-item">085. 3 ESPADAS VS 6 ESPADAS</li>
                                <li className="list-group-item">086. O LUTADOR E O TRITÃO DO KARATÊ</li>
                                <li className="list-group-item">087. TUDO ACABADO</li>
                                <li className="list-group-item">088. MORRA!!</li>
                                <li className="list-group-item">089. MUDANÇA</li>
                                <li className="list-group-item">090. O QUE VOCÊ PODE FAZER</li>
                            </ul>
                        </div>
                        <img src="https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_fim7mo5d856sp16b4ba0oa9k34/-S897-FWEBP" className="col-lg-4" alt="Capa Volume 1" style={{maxHeight: '540px'}}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </>
    )
  }
  export default VolumesPage