import React from 'react'
import Button from './Button'

const InputCard: React.FC = () => {
  return (
    <div className='h-1/2 rounded-lg shadow-lg  w-1/2 flex justify-center items-center'>
      <div className='w-full max-w-4xl p-4'>
        <h3 className='text-[var(--text-color)] text-2xl font-semibold mb-4 text-center '>Enter the Ingredients</h3>
        <div className=''>
          <textarea
            className='w-full h-40 p-3 text-[var(--text-color)] border border-[var(--accent-color)] rounded-lg'
            placeholder='Enter the ingredients you wish to have recipe'>
          </textarea>
          <div className='mt-2 flex items-center justify-center'>
            <Button title='Generate' color='bg-[var(--accent-color)]' onClick={()=>{}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputCard