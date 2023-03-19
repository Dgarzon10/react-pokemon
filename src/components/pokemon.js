import React, {useState} from "react";
import "./pokemon.css";
import TipoPokemon from "./tipoPokemon";
import InfoPokemon from "./informacionPokemon";
export default function Pokemon({ name, avatar, types }) {

  const [info, setinfo] = useState(false)
  const clickHandler=()=>{
    console.log('Click mas Info')
    setinfo(!info)
  }

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
            <img src={avatar} alt={name} style={{ maxHeight: 200, minHeight: 200 }} />
          </figure>
          <div className="d-grid mt-2">
            <button className="btn btn-lg btn-primary" type="button" onClick={clickHandler}>Block button</button>
          </div>
          {info ? (
            <InfoPokemon name={name}/>
          ):(
            ""
          )}
        </div>
      </div>
    </>
  );
}
