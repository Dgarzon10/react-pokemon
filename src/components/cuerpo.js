import React, { useEffect, useState } from "react";
import GridPokemons from "./gridPokemons";
import pokedex from "../extras/pokedexlogo.svg";

export default function Cuerpo() {
  const [pokemons, setpokemons] = useState([]);
  const [reload, setreload] = useState(false)
  const [busqueda, setbusqueda] = useState("");
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
      let AnteriorPagina = await json.previous || '#';
      json.results.forEach(async (e) => {
        let res = await fetch(e.url),
          json = await res.json();
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.other.dream_world.front_default,
          types: json.types.map((e)=> e.type.name),
        };
        setpokemons((pokemons) => [...pokemons, pokemon]);
      });
      setproximaP(proximaPagina);
      setanteriorP(AnteriorPagina);
    };
    getPokemons(url);
  }, [url,reload]);

  const handleChange = (e) => {
    setbusqueda(e.target.value);
    
  };
  const handleClick = async (e) => {
    if (busqueda.length===0) {
      setreload(!reload)
      setpokemons([])
    }
    let res = await fetch(`${url + busqueda}`),
      json = await res.json();
    let pokemon = {
      id: json.id,
      name: json.name,
      avatar: json.sprites.other.dream_world.front_default,
      types: json.types.map((e)=> e.type.name),
    };
    setpokemons(() => [pokemon]);

    setbusqueda([])
  };

  return (
    <>
      <div className="d-flex-column justify-content-center .d-sm-none .d-md-block">
        <h2 className="m-2">
          <img src={pokedex} alt="Pokedex" style={{ width: 500 }}></img>
        </h2>
        <div className="m-10">
          <div className="d-flex justify-content-center ">
            <input
              className="form-control w-25 me-2"
              type="search"
              placeholder="Search"
              onChange={handleChange}
            />
            <button
              className="btn btn-secondary my-2 my-sm-0"
              type="submit"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
        {pokemons.length === 1 ? (
          <span style={{ margin: "5rem" }}></span>
        ) : (
          <div className="my-3 d-flex justify-content-center gap-3">
            {anteriorP === "#" ? (
              <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => ProximaPagina()}
            >
              →
            </button>
              
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => AnteriorPagina()}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => ProximaPagina()}
                >
                  →
                </button>
              </>
            )}
          </div>
        )}
      </div>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        <GridPokemons pokemons={pokemons}/>
      )}
      {pokemons.length === 1 ? (
        <span style={{ margin: "5rem" }}></span>
      ) : (
        <div className="my-3 d-flex justify-content-center gap-3">
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => AnteriorPagina()}
          >
            ←
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => ProximaPagina()}
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
