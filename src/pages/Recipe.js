import React from "react";
import Layout from "../components/layout";
import { recipes } from "../Data/recipes";
import { Link } from "gatsby";

const Recipe = ({ location }) => {
  const { recipeTitle } = location.state;
  if (!recipeTitle)
    return (
      <Layout>
        <h2>No Recipe Found</h2>
      </Layout>
    );
  const recipe = recipes.find(r => r.title === recipeTitle);
  const { ingredients, directions } = recipe;
  return (
    <Layout>
      <h2>{recipe.title}</h2>
      <span style={{ fontWeight: "bold" }}>Ingredients</span>
      {ingredients.map((ingredient, i) => (
        <div key={i}>
          {`${ingredient.amount} ${ingredient.units} ${ingredient.name}`}
        </div>
      ))}
      <p style={{ marginTop: "15px" }}>
        <span style={{ fontWeight: "bold" }}>Directions</span>
        {directions.map((direction, i) => (
          <div key={i}>
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>
              {i + 1}.
            </span>
            {direction}
          </div>
        ))}
      </p>
      <Link to={"/"}>Home</Link>
    </Layout>
  );
};

export default Recipe;
