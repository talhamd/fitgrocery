import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar.js';
import BannerSlider from '../../COMPONENTS/Banner/BannerSlider.js';
import ProductCategories from '../../COMPONENTS/Category/ProductCategories.js';
import ProductSidebar from '../../COMPONENTS/Products/ProductSidebar.js';



const Home = () => {
  return (
    <>
    <Navbar/>
    <BannerSlider/>
    <ProductCategories/>
    <ProductSidebar/>
    </>
  )
}
export default Home;