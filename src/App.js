import React, { Component } from "react";
import Card from "./Card";
import { getPokemons } from "./pokemonData.js"

// const pokemon = {
//   name: "Charmander",
//   type: "fire",
//   price: 20,
//   image: "https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
// };


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      pokemonList: getPokemons(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

    this.setState({ search: e.target.value });
  }

  render() {
    const searchList = this.state.pokemonList.filter(pokemon => {
      //The indexOf() method returns the first index at which a given element can be found in the array, 
      //or -1 if it is not present.
      return pokemon.name.toLowerCase().indexOf(this.state.search.toLowerCase(), 0) > -1
    });
    console.log(searchList)
    return (
      <div className="wrapper">
        <div className="filterInput">
          <input type="text" placeholder="Search your Pokedex!" value={this.state.search} onChange={this.handleChange} />
        </div>
        <div className="list">
          {searchList.map(pokemon => {
            return <Card pokemon={pokemon} className="listItem" />
          })}
        </div>
      </div>
    );
  }
}

export default App;
