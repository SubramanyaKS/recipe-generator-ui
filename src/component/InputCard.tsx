import React from 'react'
import Button from './Button'
import { useRecipeContext } from '../context/RecipeContext'
import { generateRecipe } from '../services/api_service';

const InputCard: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const {setRecipes} = useRecipeContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleGenerateClick = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await generateRecipe(inputValue);
    setRecipes(response);
  };



  return (
    <div className='h-1/2 rounded-lg shadow-lg  w-1/2 flex justify-center items-center'>
      <div className='w-full max-w-4xl p-4'>
        <h3 className='text-[var(--text-color)] text-2xl font-semibold mb-4 text-center '>Enter the Ingredients</h3>
        <div className=''>
          <textarea
          onChange={handleInputChange}
          value={inputValue}
            className='w-full h-40 p-3 text-[var(--text-color)] border border-[var(--accent-color)] rounded-lg'
            placeholder='Enter the ingredients you wish to have recipe'>
          </textarea>
          <div className='mt-2 flex items-center justify-center'>
            <Button title='Generate' color='bg-[var(--accent-color)] hover:bg-[var(--primary-color)]' onClick={(e)=>handleGenerateClick(e)}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputCard