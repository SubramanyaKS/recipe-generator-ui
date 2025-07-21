import { useState } from 'react';
import { useRecipeContext } from '../hooks/useRecipeContext';
import { Plus } from 'lucide-react';

const RecipesInput = () => {
  const { ingredients, setIngredients } = useRecipeContext();
  const [newItem, setNewItem] = useState('');

  const handleAddIngredients = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newItem.trim() !== '') {
      setIngredients([...ingredients, newItem]);
      setNewItem(''); // Clear the input field
    }

  }

  return (
    <div
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="text"
        placeholder="e.g., broccoli, pasta, no dairy"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        aria-label="Enter ingredients or preferences"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-orange-400 focus:outline-none"
      />
      <button
        onClick={handleAddIngredients}
        className="flex bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition"
      >
       <Plus className='font-bold'/> Add Ingredients
      </button>

    </div>
  )
}

export default RecipesInput