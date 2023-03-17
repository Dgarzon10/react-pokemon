import React, { useEffect, useState } from "react";
import Pokemon from "./pokemon";
import GridPokemons from "./gridPokemons";
import pokedex from "../extras/pokedexlogo.svg"




export default function Cuerpo() {
  const [pokemons, setpokemons] = useState([]);
  const [busqueda, setusqueda] = useState("");
  const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [proximaP, setproximaP] = useState();
  const [anteriorP, setanteriorP] = useState();

  const ProximaPagina = () => {
    setpokemons([]);
    seturl(proximaP);
  };
  const AnteriorPagina = () => {
    setpokemons([]);
    seturl(anteriorP);
  };
  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      let proximaPagina = await json.next;
      let AnteriorPagina = await json.previous;
      json.results.forEach(async (e) => {
        let res = await fetch(e.url),
          json = await res.json();
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.other.dream_world.front_default,
          types: json.types,
        };
        // console.log(pokemon.types)
        // pokemon.types.map((e,index)=>{
          
        //   console.log(e.type.name,index)
        // })
        setpokemons((pokemons) => [...pokemons, pokemon]);
      });
      setproximaP(proximaPagina);
      setanteriorP(AnteriorPagina);
    };
    getPokemons(url);
  }, [url]);

  return (
    <>
      <div className="d-flex-column justify-content-center">
        <h2 className="m-2">
          <img src={pokedex} style={{width:500}}></img>
        </h2>
        <div  className="m-10">
          <form className="d-flex justify-content-center">
            <input
              className="form-control w-25 me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="my-3 d-flex justify-content-center gap-3">
          <button type="button" className="btn btn-outline-dark" onClick={() => AnteriorPagina()}>←</button>
          <button type="button" className="btn btn-outline-dark" onClick={() => ProximaPagina()}>→</button>
        </div>
      </div>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        <GridPokemons pokemons={pokemons} />
      )}
      <div className="my-3 d-flex justify-content-center gap-3 ">
          <button type="button" className="btn btn-outline-dark" onClick={() => AnteriorPagina()}>←</button>
          <button type="button" className="btn btn-outline-dark" onClick={() => ProximaPagina()}>→</button>
        </div>
    </>
  );
}
