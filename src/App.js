import {useEffect, useState} from "react";

import Recipe from "./component/Recipe";

const App = (props) => {
    const APP_ID = '50c847f9';
    const APP_KEY = '745c65a2aa67a5245b282c4d893b7772';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(async () => {
        getRecipe()
    }, [query])

    const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();

        setRecipes(data.hits);
    }
    const updateSearch = (e) => {
        setSearch(e.target.value)
    }
    const onsubmit = (e) => {
        e.preventDefault();

        setQuery(search);
        setSearch('')
    }


    return (
        <div className='App'>
            <form className='search-form' onSubmit={onsubmit}>
                <input
                    value={search}
                    onChange={updateSearch}
                    placeholder='Search ur recipe'
                    className='search-bar'
                    type="text"/>
                <button
                    className='search-button'
                    type='submit'>
                    SUMBIT
                </button>
            </form>
            <div className="wrapper">
                {recipes.map(el => (
                    <Recipe key={el.recipe.label}
                            title={el.recipe.label}
                            calories={el.recipe.calories}
                            image={el.recipe.image}
                            ingredients={el.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    )
}

export default App;


