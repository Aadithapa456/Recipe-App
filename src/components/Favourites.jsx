import React from 'react'
import RecipeCard from './RecipeCard'

const Favourites = ({favourite}) => {
  return (
    <div>
        {favourite? "Favourites found": "Not found"}
    </div>
  )
}

export default Favourites
