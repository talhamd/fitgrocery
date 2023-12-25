import React from 'react'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar.js'
import BannerSlider from '../../COMPONENTS/BANNERS/BannerSlider.js';
import ProductCategories from '../../COMPONENTS/Category/ProductCategories.js';

const Home = () => {
  return (
    <>
    <Navbar/>
    <BannerSlider/>
    <ProductCategories/>
    </>
  )
}
export default Home;