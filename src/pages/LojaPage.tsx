import { NavLink, Outlet } from "react-router-dom";
import useCategorias from "../hooks/useCategorias";
import { useState } from "react";

const LojaPage = () => {
  const { data: categorias, isLoading, error } = useCategorias();
  const [isActive1, setIsActive1] = useState(true);
  const isActive2 = !isActive1;
  
  console.log(isActive1, isActive2)

  const handleNavLinkClick1 = () => {
    setIsActive1(true);
  };

  const handleNavLinkClick2 = () => {
    setIsActive1(false);
  };

  if (isLoading) return <h6>Carregando...</h6>;

  if (error) throw error;

  return (
    <div className="col">
      <div className="">
        <div className="navegacao">
          <NavLink className="navlink" to="/loja" style={({isActive}) => {
            return {
              color: isActive1 ? "white" : "black",
              backgroundColor: isActive1? "red" : "white",
              textDecoration: isActive1 ? 'none' : 'none',
            };

          }} onClick={handleNavLinkClick1}>TODOS</NavLink>
          {categorias?.map((categoria) => (
          <NavLink className="navlink" style={({isActive}) => {
            return {
              color: isActive ? "white" : "black",
              backgroundColor: isActive? "red" : "white",
              textDecoration: isActive ? 'none' : 'none',
            };
          }}onClick={handleNavLinkClick2} to={`/loja/${categoria.slug}`}>{categoria.nome.toUpperCase()}
          </NavLink>
          ))}
        </div>
      </div>
      <div className="col-lg-12" style={{marginTop:'20px'}}>
        <Outlet />
      </div>
    </div>
  );
};

export default LojaPage;
