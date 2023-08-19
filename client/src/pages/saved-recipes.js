import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID';

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID()
  
  useEffect(() => {
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`, 
        );
        setSavedRecipes(response.data.savedRecipes)
      } catch (e) {
        console.error(e);
      }
    };

    fetchSavedRecipe();
  }, []);

  // const isRecipeSaved = (id) => savedRecipes.includes(id);

  return <div> <h1> Saved Recipes</h1>
  <ul>
    {savedRecipes.map((recipe) => (
        <li key={recipe._id}>
            <div>
                <h2>{recipe.name}</h2>
                {/* <button 
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}>
                {isRecipeSaved(recipe._id) ? "SAVED" : "Save"}
                </button>  */}
                {/* Removing from saved recipes/delete?? */}
            </div>
            <div>
                <img src={recipe.imageUrl} alt={recipe.name} />
                <p> Cooking Time: {recipe.cookingTime} (minutes)</p>
            </div>
            <div className='Ingredients'>
                <p>{recipe.ingredients}</p>
            </div>
            <div className='instructions'>
                <p>{recipe.instructions}</p>
            </div>
        </li>
    ))}
    
    </ul> 
    </div>;
};
