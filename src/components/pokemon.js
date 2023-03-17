import React, { useState, useEffect} from "react";
import './pokemon.css'
import TipoPokemon from "./tipoPokemon";

export default function Pokemon({name,avatar,types}){
	// console.log(types[0].type.name)
  // console.log(types.length)
    useEffect(() => {
      const recorrertipos=()=>{
        types.forEach(e => {
          
          // console.log(e.type.name)
          // console.log(e.type.name)
        });
      }
      recorrertipos();
    }, [])
    
		return (
      <>
        <div className="carta ">
          <div className="card-body cuerpo">
            <h4 className="card-title my-1 titulo">{name}</h4>
            <div className="tipos my-1">
            <TipoPokemon tipo={types[0].type.name}/>
            </div>
            <figure>
              <img src={avatar} style={{ maxHeight: 200, minHeight:200}} />
            </figure>
            <div className="mas-Info">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      </>
    );
	}