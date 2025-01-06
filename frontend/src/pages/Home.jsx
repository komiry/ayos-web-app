import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopTechnicians from '../components/TopTechnicians'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopTechnicians />
      <Banner />
    </div>
  )
}

export default Home