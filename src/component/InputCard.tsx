import React from 'react'
import { generateRecipe } from '../services/api_service';
import CuisineDropdown from './CuisineDropDown';
import RecipesInput from './RecipesInput';
import IngredientChip from './IngredientChip';
import { useRecipeContext } from '../hooks/useRecipeContext';

const InputCard: React.FC = () => {
  const {setRecipes,ingredients,setIngredients} = useRecipeContext();
  

 
  const handleGenerateClick = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const ingredientList=ingredients.join(', ');
    const response = await generateRecipe(ingredientList);
    setRecipes(response);
  };

  const handleDeleteIngredients = (e:React.MouseEvent<HTMLButtonElement>,text:string)=>{
    e.preventDefault();
    setIngredients(ingredients.filter((chip) => chip !== text));
  }

  
  return (
    <div className='max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6'>
      {/* <div className='w-full max-w-4xl p-4'> */}
        <h3 className='text-2xl font-semibold text-gray-800 font-montserrat text-center '>Enter the Ingredients</h3>
        <div className=''>
          <RecipesInput/>
          <CuisineDropdown/>
           <div className='flex flex-wrap m-5 gap-2'>
            {ingredients.map((item)=>(
              <div >
                <IngredientChip text={item} onDelete={(e)=>handleDeleteIngredients(e,item)}/>
              </div>
            ))}
          </div>
          <button
          onClick={(e)=>handleGenerateClick(e)}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold transition"
      >
        Get My Recipe
      </button>
        </div>
      {/* </div> */}
    </div>
  )
}

export default InputCard