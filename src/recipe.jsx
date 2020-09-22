import React from 'react';

const Recipe = (props) => {
  const [recipe] = props;
  return(
    <div>
      <h1>{recipe.recipe.label}</h1>
      <p>{}</p>
      <img src="" alt=""/>
    </div>
  )
}

export default Recipe;