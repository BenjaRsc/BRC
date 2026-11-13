import { useState, useEffect, useRef } from "react";
import "../Pantalla.css";

const CARTAS = [
  { id: 0, titulo: "Perfil Profesional", imagen: "React"},
  { id: 1, titulo: "Proyectos", imagen: "Node"},
  { id: 2, titulo: "Desarrollo", imagen: "CSS"},
  { id: 3, titulo: "Herramientas", imagen: "API"},
];

export default function Pantalla({ items = CARTAS, onElegir = () => {} }) {
  const total = CARTAS.length;
  const [seleccion, seleccionar] = useState(0);

  function MoverDerecha(){
    return seleccionar((valAnterior) => ((valAnterior + 1) % total));
  }

  function MoverIzquierda(){
    return seleccionar((valAnterior) => (valAnterior - 1 < 0 ? (total - 1) : (valAnterior - 1) ));
  }

  useEffect(() => {
    const inputTecla = (e) => {
      if (e.key === "ArrowRight" || e.key === "d") MoverDerecha()
      if (e.key === "ArrowLeft" || e.key === "a") MoverIzquierda()
    };

    window.addEventListener("keydown", inputTecla);
    return () => window.removeEventListener("keydown", inputTecla);
  });

  function Mover(ind){
    seleccionar((v) => ind);
  }
 
  return (
    <div className="pantalla">
      <h1 className="titulo">
        {CARTAS[seleccion].titulo}
      </h1>

      <div className='fila' style={{translate: 450 + (-300 * seleccion)}}>
        {
          CARTAS.map((carta, indice) =>
            <>
            <button className={(seleccion === indice ? 'seleccionado' : 'carta')} onClick={() => Mover(indice)}>
              <p>{carta.titulo}</p>
            </button>
            </>
          )
        }
      </div>

        <button onClick={() => MoverIzquierda()}>
          <i class="fa-solid fa-angle-left"></i>
        </button>

        <button onClick={() => MoverDerecha()}>
          <i class="fa-solid fa-angle-right"></i>
        </button>

    </div>
  );
}
 