import React from 'react'
import Title from '../component/Title'
import InputCard from '../component/InputCard'
import RecipeCard from '../component/RecipeCard'

const Home:React.FC = () => {
  return (
    <div>
      <Title/>
      <div className='flex flex-col items-center justify-center mt-10 mx-5'>
        <InputCard/>
        <RecipeCard/>
      </div>
      
      
    </div>
  )
}

export default Home