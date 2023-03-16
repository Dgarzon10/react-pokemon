import React, { useState, useEffect } from "react";
import Pokemon from "./pokemon";
import './gridPokemons.css'

export default function GridPokemons({ pokemons }) {
  return (
    <>
      <div className="grid">
        {pokemons.map((e) => (
					<Pokemon key={e.id} name={e.name} avatar={e.avatar} />
        ))}
      </div>
    </>
  );
}
