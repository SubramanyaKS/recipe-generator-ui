import React from 'react'
import Title from '../component/Title'
import InputCard from '../component/InputCard'
import RecipeCard from '../component/RecipeCard'

const Home:React.FC = () => {
  return (
    <section>
      <Title/>
      <div className='flex flex-col items-center justify-center mt-10 mx-5'>
        <InputCard/>
        <RecipeCard/>
      </div>
    </section>
  )
}

export default Home