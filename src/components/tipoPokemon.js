import React from "react";

export default function TipoPokemon({ tipo }) {
  const clasificar = () => {
    //DERECHOS DE AUTOR PARA https://github.com/juansvrs
    switch (tipo) {
      case "flying":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
        return (
          <span class="badge rounded-pill bg-light text-capitalize">
            {tipo}
          </span>
        );
      case "fire":
        return (
          <span class="badge rounded-pill bg-danger text-capitalize">
            {tipo}
          </span>
        );
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      case "grass":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        return (
          <span class="badge rounded-pill bg-success text-capitalize">
            {tipo}
          </span>
        );
      case "ice":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        return (
          <span class="badge rounded-pill bg-info text-capitalize">{tipo}</span>
        );
      case "water":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        return (
          <span class="badge rounded-pill bg-info text-capitalize">{tipo}</span>
        );
      case "bug":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        return (
          <span class="badge rounded-pill bg-success text-capitalize">
            {tipo}
          </span>
        );
      case "normal":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        return <span class="badge rounded-pill bg-dark">{tipo}</span>;

      case "electric":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        return <span class="badge rounded-pill bg-warning">{tipo}</span>;

      case "ground":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        return <span class="badge rounded-pill bg-warning">{tipo}</span>;
      case "fairy":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        return <span class="badge rounded-pill bg-secondary">{tipo}</span>;
      case "psychic":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        return <span class="badge rounded-pill bg-secondary">{tipo}</span>;
      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        return (
          <span class="badge rounded-pill bg-primary text-capitalize">
            {tipo}
          </span>
        );
    }
  };
  return (
    <>
      <h4>{clasificar()}</h4>
    </>
  );
}
