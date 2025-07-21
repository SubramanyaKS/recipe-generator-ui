import React from 'react'


type IngredientChipProps ={
    text:string;
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const IngredientChip = ({text, onDelete}:IngredientChipProps) => {
  return (
        <div className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
          {text}
          <button onClick={onDelete} className='ml-2 text-white hover:text-gray-200'>X</button>
        </div>
  )
}

export default IngredientChip