import React from 'react'

const DashboardPage = async() => {
  const recipeData = await getRecipeOfTheDay();
  const categoriesData = await getCategories();
  const areasData = await getAreas();

  
  return (
    <div className="py-min-h-screen bg-stone-50 py-16 px-4">
      DashboardPage
    </div>
  )
}

export default DashboardPage
