import React from 'react'
import './ProductCategories.css'
import img1 from '../../ASSETS/Images/fruitbasket.jpeg'
import img2 from '../../ASSETS/Images/dairyproducts.jpeg'
import img3 from '../../ASSETS/Images/kitchencleaner.jpeg'
import img4 from '../../ASSETS/Images/utensils.jpeg'


const ProductCategories = () => {
  return (
    <div className='homecategories'>
        <div className='container'>
          <img src = {img1} alt = 'img1'/>
            <div className='content'>
            <h1>Fresh Fruits</h1>
            <p>Shop Now</p>
            </div>
        </div>
        <div className='container'>
        <img src = {img2} alt = 'img2'/>
            <div className='content'>
            <h1>Dairy Items </h1>
            <p>Shop Now</p>
            </div>
        </div>
        <div className='container'>
          <img src = {img3} alt = 'img3'/>
            <div className='content'>
            <h1>Cleaners</h1>
            <p>Shop Now</p>
            </div>
        </div>
        <div className='container'>
          <img src = {img4} alt = 'img4'/>
            <div className='content'>
            <h1>Essentials</h1>
            <p>Shop Now</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCategories