import React, { useState, useEffect } from "react";

export default function InformacionPokemon({name}) {
  const [stats, setstats] = useState([]);
  const [hp, sethp] = useState("")
  const [atk, setatk] = useState("")
  const [def, setdef] = useState("")
  const [speAtk, setspeAtk] = useState("")
  useEffect(() => {
    const masInfo = async (e) => {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`),
        json = await res.json();
      let stats = {
        hp: json.stats[0].base_stat,
        attack: json.stats[1].base_stat,
        defence: json.stats[2].base_stat,
        special_attack: json.stats[3].base_stat,
      };
      sethp(stats.hp.toString())
      setdef(stats.defence.toString())
      setatk(stats.attack.toString())
      setspeAtk(stats.special_attack.toString())
      setstats({ stats });
    };
    masInfo();
    console.log(stats.hp)
  }, []);

  return (
    <>
      <div className="progress" style={{margin:5}}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{width:`${hp}%`}}
          aria-valuenow={stats.hp}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <span style={{position:"absolute", fontWeight:"bold",left:"10%"}}>HP: {hp}</span>
      </div>
      <div className="progress" style={{margin:5}}>
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{width: `${atk}%`}}
          aria-valuenow={stats.attack}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <span style={{position:"absolute", fontWeight:"bold",left:"10%"}}>ATTACK: {atk}</span>
      </div>
      <div className="progress" style={{margin:5}}>
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{width: `${def}%`}}
          aria-valuenow={stats.defence}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <span style={{position:"absolute", fontWeight:"bold",left:"10%"}}>DEFENCE: {def}</span>
      </div>
      <div className="progress" style={{margin:5}}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{width:`${speAtk}%`}}
          aria-valuenow={stats.special_attack}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
         <span style={{position:"absolute", fontWeight:"bold",left:"10%"}}>Special Attack: {speAtk}</span>
      </div>    
    </>
  );
}
