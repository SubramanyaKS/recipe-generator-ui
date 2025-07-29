import React from 'react'
import { generateRecipes } from '../services/api_service';
import CuisineDropdown from './CuisineDropDown';
import RecipesInput from './RecipesInput';
import IngredientChip from './IngredientChip';
import { useRecipeContext } from '../hooks/useRecipeContext';
import { Sparkle } from 'lucide-react';
import MealTypeDropdown from './MealTypeDropDown';

const InputCard: React.FC = () => {
  const { setRecipes, ingredients, setIngredients,cuisine } = useRecipeContext();



  const handleGenerateClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const ingredientList = ingredients.join(', ');
    const response = await generateRecipes(ingredientList,cuisine);
    setRecipes(response);
  };

  const handleDeleteIngredients = (e: React.MouseEvent<HTMLButtonElement>, text: string) => {
    e.preventDefault();
    setIngredients(ingredients.filter((chip) => chip !== text));
  }


  return (
    <div className='max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6'>
      <h3 className='text-2xl font-semibold text-gray-800 font-montserrat text-center '>Let's Cook</h3>
      <div className=''>
        <RecipesInput />
        <CuisineDropdown />
        <MealTypeDropdown/>
        <div className='flex flex-wrap m-5 gap-2'>
          {ingredients.map((item) => (
            <div >
              <IngredientChip text={item} onDelete={(e) => handleDeleteIngredients(e, item)} />
            </div>
          ))}
        </div>
        <button
          onClick={(e) => handleGenerateClick(e)}
          className="w-full flex gap-2 justify-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold transition"
        >
          <Sparkle/> Get My Recipe
        </button>
      </div>
    </div>
  )
}

export default InputCard