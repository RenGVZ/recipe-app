import React, {useEffect, useState} from 'react';
import './app.css';
import Recipe from './recipe';

const App = () => {
  const APP_ID = 'ffd1351b';
  const APP_KEY = 'b1dee378d853fab1dfd839d55123c396';
  const APP_KEY_2 = '3f736f5d1308bebaa81ca3f49ac5cbc8';

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes();
  }, []);
  
  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await res.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }
  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Click 
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe recipe={recipe}/>
      ))}
    </div>
  );
}

export default App;
