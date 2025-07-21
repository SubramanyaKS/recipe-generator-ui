import React from 'react'

const Title:React.FC = () => {
  return (
    <div className='mt-2'>
        <h2 className='text-center text-3xl font-bold text-[var(--text-color)]'>AI Powered Recipes Generator </h2>
    <p className='text-[var(--primary-color)] text-center'>Enter ingredients, get delicious recipes in seconds</p>
    </div>
  )
}

export default Title