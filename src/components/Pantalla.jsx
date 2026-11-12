import { useState, useEffect, useRef } from "react";
import "../Carousel.css";

const EJEMPLO = [
  { id: 1, titulo: "Perfil Profesional", etiqueta: "React", color: "#c0392b" },
  { id: 2, titulo: "Proyectos", etiqueta: "Node", color: "#2c7a3f" },
  { id: 3, titulo: "Desarrollo", etiqueta: "CSS", color: "#8e44ad" },
  { id: 4, titulo: "Herramientas", etiqueta: "API", color: "#d68910" },
];


export default function Pantalla({ items = EJEMPLO, onElegir = () => {} }) {
  const [i, setI] = useState(0);
 
  const ir = (n) => setI(Math.max(0, Math.min(items.length - 1, n)));
 
  const teclas = (e) => {
    if (e.key === "ArrowRight") ir(i + 1);
    if (e.key === "ArrowLeft") ir(i - 1);
    if (e.key === "Enter") onElegir(items[i]);
  };
 
  return (
    <div className="mc" tabIndex={0} autoFocus onKeyDown={teclas}>
      <div className="mc-titulo">{items[i].titulo}</div>
 
      <div className="mc-ventana">
        <div className="mc-pista" style={{ "--i": i }}>
          {items.map((it, n) => (
            <button
              key={it.id}
              tabIndex={-1}
              className={`mc-card ${n === i ? "activa" : ""}`}
              onClick={() => (n === i ? onElegir(it) : ir(n))}
            >
              <span
                className="mc-portada"
                style={{ background: it.imagen ? `center / cover url(${it.imagen})` : it.color || "#555" }}
              >
                {!it.imagen && it.titulo}
              </span>
              <span className="mc-pie">
                <span className="mc-puntos">
                  {[...Array(4)].map((_, p) => <i key={p} className="on" />)}
                </span>
                <span className="mc-etq">{it.etiqueta}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
 
      <div className="mc-tira" style={{ "--i": i }}>
        {items.map((it, n) => (
          <button
            key={it.id}
            tabIndex={-1}
            aria-label={it.titulo}
            className={`mc-mini ${n === i ? "activa" : ""}`}
            style={{ background: it.color || "#555" }}
            onClick={() => ir(n)}
          />
        ))}
        <span className="mc-flecha" />
      </div>
 
      <div className="mc-ayuda">
        <span>◀ ▶ Mover</span>
        <span>Enter Abrir</span>
      </div>
    </div>
  );
}
 