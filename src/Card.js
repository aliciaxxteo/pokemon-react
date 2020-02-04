import React from "react";

const bgColor = {
  fire: "#fe7500",
  water: "#6a87f3",
  grass: "#53d34e",
  thunder: "#e3c260",
  psychic: "#ff2482",
  ice: "#b282f2"
}



const Card = props => {
  return (
    <div className="listItem" style={{ background: bgColor[props.pokemon.type] }} >
      <img src={props.pokemon.image} alt="pokemon" />
      <h3 className="listItem__name">{props.pokemon.name}</h3>
      <h3 className="listItem__name">Pokemon Type: {props.pokemon.type}</h3>
      <div className="listItem__price">
        <div className="listItem__priceTxt">{props.pokemon.price}</div>
      </div>
    </div >
  );
};

export default Card;
