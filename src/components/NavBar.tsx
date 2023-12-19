import { Link, NavLink } from "react-router-dom";
import opexicon from '/opexicon.webp'
import banner1 from '/banner1.jpg';
import banner2 from '/banner2.jpg';
import banner3 from '/banner3.jpg'; 
import { FaCommentDots, FaSignInAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";



function NavBar() {
  return (
    <>
        <nav className="navbar navbar-light navbar-expand-md" id="navbaredit">
            <div className="container">

                <Link to="/" className="navbar-brand">
                    <img className="img-fluid" src={opexicon} style={{width: "120px"}} alt="Logo One Piece"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-expanded="false" aria-label="Botão de Navegação" style={{color: "white"}}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="menu">
                    <div className="navbar-nav mr-auto">

                    <div className="dropdown">
                        <a className="nav-link nav-item dropdown-toggle" data-toggle="dropdown" href="#" style={{ color: 'white', textShadow: '2px 0px 0px black' }}>ANIME</a>

                        <div className="dropdown-menu text-left" style={{backgroundColor: "rgba(255, 0, 0, 0.979)"}}>
                            <Link to="episodios" className="dropdown-item">TODOS OS EPISÓDIOS</Link>
                            <Link to="filmes" className="dropdown-item">FILMES</Link>
                        </div>

                    </div>

                    <div className="dropdown">
                        <a className="nav-link nav-item dropdown-toggle" data-toggle="dropdown" href="#" 
                        style={{ color: 'white', textShadow: '2px 0px 0px black' }}>MANGÁ</a>

                        <div className="dropdown-menu" style={{backgroundColor: "rgba(255, 0, 0, 0.979)"}}>
                            <Link to="volumes" className="dropdown-item">TODOS OS VOLUMES</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <a className="nav-link nav-item dropdown-toggle" data-toggle="dropdown" href="#" style={{ color: 'white', textShadow: '2px 0px 0px black' }}>INFO</a>

                        <div className="dropdown-menu" style={{backgroundColor: "rgba(255, 0, 0, 0.979)"}}>
                            <Link to="personagens" className="dropdown-item">PERSONAGENS</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <a className="nav-link nav-item dropdown-toggle" data-toggle="dropdown" href="#" style={{ color: 'white', textShadow: '2px 0px 0px black' }}>LOJA</a>

                        <div className="dropdown-menu" style={{backgroundColor: "rgba(255, 0, 0, 0.979)"}}>
                            <Link to="loja" className="dropdown-item">PRODUTOS</Link>
                            <Link to="cadastrar-produto" className="dropdown-item">ADICIONAR PRODUTO</Link>
                        </div>
                    </div>

                    </div>

                    <NavLink to='/carrinho'>
                        <IoMdCart style={{color: "white", fontSize:'20px', marginRight:'22px'}}/>
                    </NavLink>

                    <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#login" data-toggle="modal" style={{
                            color: 'white',
                            textShadow: '2px 0px 0px black',
                            fontFamily: 'Bree Serif',
                            fontSize: '16px',

                        }}>
                        <FaSignInAlt style={{color: "white", fontSize:'20px'}} /> 
                    </a>


                    </div>

                </div>

            </div>
        </nav>

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={banner1} className="d-block w-100 img-fluid"  alt="..." />
                </div>
                <div className="carousel-item">
                <img src={banner3} className="d-block w-100 img-fluid" alt="..." />
                </div>
                <div className="carousel-item">
                <img src={banner2} className="d-block w-100 img-fluid" alt="..." />
                </div>
            </div>
        </div>

        <div className="modal fade" id="login">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <span className="modal-title">Faça o seu Login!</span>
                    <i className="fa-solid fa-xmark" style={{color: "#ffffff"}} data-dismiss="modal" aria-label="close">
                    <span aria-hidden="true">&times;</span>
                    </i>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Senha:</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary" id="submit_button">Submit</button>
                    </form>
                </div>
                </div>
            </div>
        </div>

        <div className="container">
        <div className="col-lg-12" id="message">
            <div className="text-center">
                <FaCommentDots style={{ color: "white"}}/>
            </div>
            
            <p> <a 
                data-trigger="hover"
                data-toggle="tooltip" 
                data-placement="right"
                data-html="true"
                title="海賊王に俺はなる!"
                >"EU VOU SER O REI DOS PIRATAS!!!" ― LUFFY, CHAPÉU DE PALHA</a></p>
      </div>

        </div>
    </>
  );
}
export default NavBar;
