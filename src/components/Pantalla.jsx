import { useState, useEffect, useRef } from "react";
import "../Pantalla.css";
import Perfil from "./Perfil";
import Proyectos from "./Proyectos"
import Desarrollo from "./Desarrollo"
import Herramientas from "./Herramientas"



const CARTAS = [
  { id: "Perfil", titulo: "Perfil Profesional", imagen: ""},
  { id: 1, titulo: "Proyectos", imagen: ""},
  { id: 2, titulo: "Desarrollo", imagen: ""},
  { id: 3, titulo: "Herramientas", imagen: ""},
];

const componentes = [
  Perfil,
  Proyectos,
  Desarrollo,
  Herramientas,
];


export default function Pantalla() {
  const total = CARTAS.length;
  const [seleccion, seleccionar] = useState(0);
  const [vista, setVista] = useState(false);
  const [Componente, setComponente] = useState(componentes[0]);
  
  function ActualizarComponente(){
    setComponente(prevComponente => componentes[seleccion]);
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
      if (e.key === "Enter" || e.key === "z") colocarVista()
    };

    window.addEventListener("keydown", inputTecla);
    return () => window.removeEventListener("keydown", inputTecla);
  });


  function colocarVista(){
    setVista(v => v ? false : true);
    ActualizarComponente()
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
              <button className="" onClick={() => colocarVista(indice)}>
                Ver más
              </button>
            </button>
            </>
          )
        }
      </div>

      {vista &&(
        <div className="">
          <div className="detalle detalle-contenido">
            <button onClick={() => colocarVista()}>
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
 