import React, { useState } from "react";

import axios from "axios";

import InputForm from "./InputForm";
import RecipeItem from "./RecipeItem";

function RecipeSearch() {

    const [ingredients, setIngredients] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState("");

    const handleSearch = async () => {
    if (!ingredients) {
      setError("Please enter some ingredients!");
      return;
    }

    setError("");
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=9080341206de4b03854a538cefe16f2d`
      );
      setRecipes(res.data);
    } catch {
      setError("Oops! Something went wrong.");
    }
  };
    
    return (
    <div className="recipe-search">
      <InputForm
        ingredients={ingredients}
        setIngredients={setIngredients}
        onSearch={handleSearch}
      />
      {error && <p className="error">{error}</p>}
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <p className="info">No recipes yet. Search above 👆</p>
        )}
      </div>
    </div>
  );
}

export default RecipeSearch