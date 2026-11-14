import { useState, useEffect, useRef } from "react";
import "../Pantalla.css";
import Cv from "./CV";
import Proyectos from "./Proyectos"
import Desarrollo from "./Desarrollo"
import Herramientas from "./Herramientas"



const CARTAS = [
  { id: 0, titulo: "CV", imagen: ""},
  { id: 1, titulo: "Proyectos", imagen: ""},
  { id: 2, titulo: "Desarrollo", imagen: ""},
  { id: 3, titulo: "Herramientas", imagen: ""},
];

const componentes = [
  Cv,
  Proyectos,
  Desarrollo,
  Herramientas,
];


export default function Pantalla() {
  const total = CARTAS.length;
  const [seleccion, seleccionar] = useState(0);
  const [vista, setVista] = useState(false);
  const [Componente, setComponente] = useState(componentes[0]);
  
  function ActualizarComponente(indice){
    setComponente(prevComponente => componentes[indice]);
  }

  function Mover(ind){
    seleccionar((v) => ind);
  }

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
      if (e.key === "Enter" || e.key === "z") colocarVista(seleccion)
    };
    window.addEventListener("keydown", inputTecla);
    return () => window.removeEventListener("keydown", inputTecla);
  });

  function colocarVista(indice){
    ActualizarComponente(indice)
    setVista(v => v ? false : true);
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
            <button tabIndex={-1} className={(seleccion === indice ? 'seleccionado' : 'carta')} onClick={() => Mover(indice)} onKeyDown={(event) => {event.preventDefault();}}>
              <p>{carta.titulo}</p>
              <button className="" onClick={() => colocarVista(indice)}>
                <i class="hn hn-angle-up-solid"></i>
              </button>
            </button>
            </>
          )
        }
      </div>

      {vista &&(
        <div className="">
          <div className="detalle detalle-contenido">
            <button onClick={() => colocarVista(seleccion)}>
              <i class="fa-solid fa-xmark"></i>
            </button>
            <Componente key={seleccion}/>
          </div>
        </div>
      )}

        <button onClick={() => MoverIzquierda()}>
            <i class="hn hn-angle-left-solid"></i>
        </button>

        <button onClick={() => MoverDerecha()}>
            <i class="hn hn-angle-right-solid"></i>
        </button>

    </div>
  );
}
 