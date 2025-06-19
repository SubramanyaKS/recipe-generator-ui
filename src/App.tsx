import React from 'react'
import NavBar from './component/NavBar'
import Home from './pages/Home'
import { RecipeProvider } from './context/RecipeContext'

const App:React.FC = () => {
  return (
    <RecipeProvider>
    <div>
      <NavBar/>
      <Home/>
    </div>
    </RecipeProvider>
  )
}

export default App