import React, { useState,useEffect } from "react";
import "./pokemon.css";
import TipoPokemon from "./tipoPokemon";

export default function Pokemon({ name, avatar, types }) {
  console.log(types)

  //console.log(typesList)
  // const tipoPokemon=()=>{
  //   for (const type in typesList) {
  //      console.log(typesList[type].type.name)
  //   }
  // }

  return (
    <>
      <div className="carta ">
        <div className="card-body cuerpo">
          <h4 className="card-title my-1 titulo">{name}</h4>
          <div className="tipos my-1">
          <TipoPokemon tipo={types[0]}/>
          {types.lenght!==1 ? (<TipoPokemon tipo={types[1]}/>):("")}
          </div>
          <figure>
            <img src={avatar} style={{ maxHeight: 200, minHeight: 200 }} />
          </figure>
          <div className="mas-Info">
            <a href="#" className="card-link">
              Saber Más
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
