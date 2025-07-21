import { useState } from 'react';
import { cuisines } from '../utils/constant';
import { useRecipeContext } from '../hooks/useRecipeContext';

const CuisineDropdown = () => {
  const [open, setOpen] = useState(false);
  const {cuisine,setCuisine} = useRecipeContext();

  return (
    <div className="relative w-full mx-auto mt-4">
      <label className="block text-lg font-medium text-gray-700 mb-1">
        Select Cuisine:
      </label>
      <button
        onClick={() => setOpen(!open)}
        className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-left text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        {cuisine || 'Choose a cuisine'}
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border text-gray-700 border-gray-200 rounded shadow-lg max-h-60 overflow-auto">
          {cuisines.map((cuisine) => (
            <li
              key={cuisine.id}
              onClick={() => {
                setCuisine(cuisine.id);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
            >
              {cuisine.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CuisineDropdown;