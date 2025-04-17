import React from 'react'

function RecipeItem(props) {
  return (
    <div className="recipe-card">
      <img src={`https://spoonacular.com/recipeImages/${props.recipe.id}-312x231.jpg`} alt={props.recipe.title} />
      <h3>{props.recipe.title}</h3>
      <p>
        <strong>Used Ingredients:</strong>{" "}
        {props.recipe.usedIngredients.map((i) => i.name).join(", ")}
      </p>
      <a
        href={`https://spoonacular.com/recipes/${props.recipe.title}-${props.recipe.id}`}
        target="_blank"
        rel="noreferrer"
      >
        View Full Recipe
      </a>
    </div>
  )
}

export default RecipeItem