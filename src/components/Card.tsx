import { ReactNode } from "react";

interface Props {
    id: number;
    imagem: string;
    titulo: string;
    texto1: string;
    texto2: string;
    footer: ReactNode;
}

const Card = ({ id, imagem, titulo, texto1, texto2 }: Props) => {
  return (
    <div className="card border-0">
      <div className="image-container" style={{ height: "200px", width: "auto"}}>
        <img src={imagem} className="card-img-top" alt="Imagem do produto" style={{ height: "100%", objectFit: "contain" }}/>
      </div>
      <div className="card-body">
        <h5 id="titulo-card" className="card-title" style={{ color: "black", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {titulo}
        </h5>
        <p className="card-text fw-bold" style={{ color: "rgb(220, 53, 69)" }}>R$ {texto2}</p>
      </div>
    </div>
  );
};

export default Card;