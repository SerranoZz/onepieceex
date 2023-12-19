import bgbanner from '/bgbanner.jpg'
import useNoticias from '../interfaces/noticia';
import Noticia from '../interfaces/noticia';



interface Props {
  noticias: Noticia[];
}

const HomePage = ({noticias}: Props) => {
    return (
      <>
      <div className='container'>
        <div className="row">
          {noticias.map((noticia) => 
            <div className="col-lg-4 col-md-6" style={{padding: "0px 5px 0px 5px"}}>
              <a href="#" id="news-link">
                  <div className="card mb-3" style={{border: '0px'}}>
                    <img src={noticia.imagem} alt="Spoiler" style={{height:'188px'}}/>
                        <div className="text-left">
                          <h5 className="card-title" id="news-title">{noticia.titulo.toUpperCase()}</h5>
                          <p className="text" id="news-time">{noticia.data_cadastro}</p>
                        </div>
                        <p className="card-text text-justify" id="news-info">{noticia.texto}</p>
                  </div>
              </a>
            </div>
          )}
        </div>
      </div>
      </>
    )
  }
  export default HomePage