import {useEffect, useState} from "react";

import Recipe from "./component/Recipe";

const App = (props) => {
    const APP_ID = '50c847f9';
    const APP_KEY = '745c65a2aa67a5245b282c4d893b7772';

    const [recipes, setRecipes] = useState([]);

    // useEffect(async () => {
    //     getRecipe()
    // }, [])

    const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();

        setRecipes(data.hits);
    }



    return (
      <div className='App'>
          <form className='search-form'>
              <input
                  className='search-bar'
                  type="text"/>
              <button  className='search-button' type='submit'>
                  SUMBIT
              </button>
          </form>

          {recipes.map(el => (
              <Recipe
                  title={el.recipe.label}
                  calories={el.recipe.calories}
                  image={el.recipe.image}
              />
          ))}
      </div>
  )
}

export default App;


