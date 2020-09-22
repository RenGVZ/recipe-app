import React, {useEffect, useState} from 'react';
import './app.css';
import Recipe from './recipe';

const App = () => {
  const APP_ID = 'ffd1351b';
  const APP_KEY = 'b1dee378d853fab1dfd839d55123c396';
  const APP_KEY_2 = '3f736f5d1308bebaa81ca3f49ac5cbc8';

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
          />
        <button 
          className="search-button" 
          type="submit"
          >
          Click 
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          img={recipe.recipe.image}
          key={recipe.recipe.label}
          />
      ))}
    </div>
  );
}

export default App;
