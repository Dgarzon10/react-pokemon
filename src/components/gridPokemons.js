import React from "react";
import Pokemon from "./pokemon";
import "./gridPokemons.css";

export default function GridPokemons({ pokemons }) {
  return (
    <>
      {pokemons.length !== 1 ? (
        <div className="grid">
          {pokemons.map((e) => (
            <Pokemon
              key={e.id}
              name={e.name}
              avatar={e.avatar}
              types={e.types}
            />
          ))}
        </div>
      ) : (
        <div className="solo">
          <Pokemon name={pokemons[0].name} avatar={pokemons[0].avatar} types={pokemons[0].types}/>
        </div>
      )}
    </>
  );
}
