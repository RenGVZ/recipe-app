import React from 'react';

const Recipe = ({title, calories, img}) => {
  return(
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={img} alt=""/>
    </div>
  )
}

export default Recipe;