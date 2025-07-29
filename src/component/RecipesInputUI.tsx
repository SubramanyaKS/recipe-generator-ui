import { Plus } from 'lucide-react'
import type { RecipeTnputUIProps } from '../utils/types'

const RecipesInputUI = ({newItem,onChange,onClick}:RecipeTnputUIProps) => {
  return (
    <div>
      <label className='block font-medium text-gray-700 mb-1'>Enter the Ingredents</label>
      <div
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="text"
        placeholder="e.g., broccoli, rice, ragi"
        value={newItem}
        onChange={onChange}
        aria-label="Enter ingredients or preferences"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-orange-400 focus:outline-none"
      />
      <button
        onClick={onClick}
        className="flex bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition"
      >
       <Plus className='font-bold'/> Add Ingredients
      </button>

    </div>
    </div>
  )
}

export default RecipesInputUI