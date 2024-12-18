import React from 'react';
import { Lock } from 'lucide-react';
import './Templates.css';

export function Templates({ titulo, descripcion, tipo, urlImagen, estaBloqueada }) {
  return (
    <div className={`tarjeta-plantilla ${estaBloqueada ? 'bloqueada' : ''}`}>
      <div className="encabezado-tarjeta">
        <h2>{titulo}</h2>
        <p className="tipo-tarjeta">{tipo}</p>
      </div>
      <div className="contenido-tarjeta">
        <div className="contenedor-imagen">
          <img src={urlImagen} alt={titulo} />
          {estaBloqueada && (
            <div className="superposicion-candado">
              <Lock size={48} />
            </div>
          )}
        </div>
        <p>{descripcion}</p>
      </div>
      <div className="pie-tarjeta">
        <button className="boton-editar" disabled={estaBloqueada}>Editar</button>
        <button className="boton-guardar" disabled={estaBloqueada}>Guardar</button>
      </div>
      {estaBloqueada && <div className="etiqueta-bloqueada">Bloqueada</div>}
    </div>
  );
}

