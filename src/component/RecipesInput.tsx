import { useState } from 'react';
import { useRecipeContext } from '../hooks/useRecipeContext';
import RecipesInputUI from './RecipesInputUI';

const RecipesInput = () => {
  const { ingredients, setIngredients } = useRecipeContext();
  const [newItem, setNewItem] = useState('');

  const handleClickEvent =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setNewItem(e.target.value);
  }

  const handleAddIngredients = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newItem.trim() !== '') {
      setIngredients([...ingredients, newItem]);
      setNewItem('');
    }
  }

  return (
    
    <RecipesInputUI  onChange={handleClickEvent} onClick={handleAddIngredients} newItem={newItem}/>
  )
}

export default RecipesInput