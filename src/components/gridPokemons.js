import React, { useState, useEffect } from "react";
import Pokemon from "./pokemon";
import './gridPokemons.css'

export default function GridPokemons({ pokemons }) {
  const [tiposPokemon, settiposPokemon] = useState([])
  
  return (
    <>
      {pokemons.length !==1 ? (
        <div className="grid">
        {pokemons.map((e) => (
          <Pokemon key={e.id} name={e.name} avatar={e.avatar} types={()=>{

          }}/>

        ))}
      </div>
      ):(
        <div style={{maxWidth:"50%", margin:"auto"}}>
          <div className="carta ">  
          <div className="card-body cuerpo">
          <h4 className="card-title my-1 titulo">{pokemons[0].name}</h4>
          <div className="tipos my-1">
          
          </div>
          <figure>
            <img src={pokemons[0].avatar} style={{ maxHeight: 200, minHeight: 200 }} />
          </figure>
          <div className="mas-Info">
            <a href="#" className="card-link">
              Saber Más
            </a>
          </div>
        </div>
      </div>
        </div>
      )}
    </>
  );
}
