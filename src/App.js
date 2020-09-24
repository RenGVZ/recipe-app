import React, {useEffect, useState} from 'react';
import './app.css';
import Recipe from './recipe';
import {APP_KEY, APP_ID} from './key';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  useEffect(() => {
    getRecipes();
  }, [query]);
  
  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await res.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  return (
    <div className="App">
      <form 
        className="search-form"
        onSubmit={getSearch}
        >
        <input 
          className="search-bar" 
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Please type the name of a food or ingredient (For example: Pasta)"
          />
        <button 
          className="search-button" 
          type="submit"
          >
          Click 
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            recipe={recipe}
            title={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
            calories={recipe.recipe.calories} 
            img={recipe.recipe.image}
            key={recipe.recipe.label}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
