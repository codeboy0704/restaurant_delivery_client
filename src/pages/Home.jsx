import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'
import AppDowload from '../components/AppDowload'

function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDowload />
    </div>
  )
}

export default Home