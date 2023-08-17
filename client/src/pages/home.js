import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID';

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes');
        setRecipes(response.data)
      } catch (e) {
        console.error(e);
      }
    };
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`, 
        );
        setSavedRecipes(response.data.savedRecipes)
      } catch (e) {
        console.error(e);
      }
    };

    fetchRecipe();
    fetchSavedRecipe();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
    //   setSavedRecipes(response.data.savedRecipes);
    } catch (e) {
      console.error(e);
    }
  };
  
  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return <div> <h1> Recipes</h1>
  <ul>
    {recipes.map((recipe) => (
        <li key={recipe._id}>
            <div>
                <h2>{recipe.name}</h2>
                <button 
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}>
                Save
                </button>
            </div>
            <div>
                <img src={recipe.imageUrl} alt={recipe.name} />
                <p> Cooking Time: {recipe.cookingTime} (minutes)</p>
            </div>
            <div className='instructions'>
                <p>{recipe.instructions}</p>
            </div>
        </li>
    ))}
    
    </ul> 
    </div>;
};
