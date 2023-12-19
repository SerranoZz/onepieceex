import banner from '/filme1.jpg';
const FilmesPage = () => {
    return (
      <>
        <div className="container">
          <div className="ep-text">
              <h1>TODOS OS FILMES DE ONE PIECE</h1>
              <p style={{fontSize: '16px'}}>Todos os filmes de One Piece! Conheça mais do universo de One Piece e divirta-se com os Mugiwaras em mais algumas aventuras.</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <div style={{marginBottom: '40px', maxWidth: '840px'}}>
                  <div className="card mb-3" style={{borderRadius: '0px'}}>
                      <img src={banner} className="card-img-top" alt="Filme 1" style={{borderRadius: '0px'}}/>
                      <div className="card-body" style={{backgroundColor: 'red', padding: '0.25rem'}}>
                        <h5 className="card-title" style={{color: 'white', fontFamily: 'Bree Serif', fontSize: '35px', margin: '1px 0px 3px 10px'}}>FILME 1 - O GRANDE PIRATA DO OURO</h5>
                      </div>
                    </div>

                  <p style={{fontFamily: 'Titillium Web', fontSize: '16px', fontWeight: '500'}}>O FILME 0001 FOI EXIBIDO NO JAPÃO EM 04 DE ABRIL DE 2000.</p>
                  <p style={{fontFamily: 'Titillium Web', fontSize: '18px', fontWeight: 'bolder', margin: '0px 0px 0px 0px'}}>RESUMO</p>
                  <p style={{fontFamily: 'Titillium Web', fontSize: '16px', fontWeight: '500'}}>Existia um pirata conhecido como o Pirata de Ouro Woonan, que conseguiu obter aproximadamente um 1/3 do ouro do mundo. Especula-se que após a sua morte, tenha deixado todo o seu ouro em uma ilha remota, escondida até que outro pirata encontre o seu mapa e a ache. Nami encontra uma maneira de chegar até a ilha, porém não vai ser tão fácil assim, já que não são os únicos em busca do tesouro. Assim, tentarão ao máximo interromper os planos do detéstavel pirata El Drago e seu bando, para que não consigam obter o ouro de Woonan.</p>
              </div>
            </div>
        </div>
      </>
    )
  }
  export default FilmesPage