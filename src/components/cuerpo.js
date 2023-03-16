import React, { useEffect, useState } from "react";
import Pokemon from "./pokemon";
import GridPokemons from "./gridPokemons";
import './gridPokemons.css'
export default function Cuerpo() {
  const [pokemons, setpokemons] = useState([]);
  const [busqueda, setusqueda] = useState("");
	const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon/")
	const [proximaP, setproximaP] = useState()
	const [anteriorP, setanteriorP] = useState()

	const ProximaPagina=()=>{
		setpokemons([])
		seturl(proximaP)
	}
	const AnteriorPagina=()=>{
      setpokemons([])
      seturl(anteriorP)
	}
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
          avatar: json.sprites.front_default,
        };
        setpokemons((pokemons) => [...pokemons, pokemon]);
      });
        setproximaP(proximaPagina);
        setanteriorP(AnteriorPagina);
    };
    getPokemons(url);
  }, [url]);



  return (
    <>
			<div>
      	<h2>Pokedex</h2>
				<div>
					<input type="text" placeholder="    Busque su Pokemon"/>
					<button>Buscar</button>
				</div>
				<button  onClick={()=>AnteriorPagina()}>←</button>
        <button onClick={()=>ProximaPagina()}>→</button>

				
			</div>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        <GridPokemons pokemons={pokemons}/>
      )}
    </>
  );
}
