import React, { Component } from "react";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

import "./App.css";

class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=7f9fd8a7997e2c3ad5345df7de833908"
  };

  // async getRecipes() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes: jsonData.recipes
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // componentDidMount() {
  //   this.getRecipes();
  // }

  render() {
    // console.log(this.state.recipes);

    return (
      <div>
        <RecipeList recipes={this.state.recipes} />
        <RecipeDetail />
      </div>
    );
  }
}

export default App;
