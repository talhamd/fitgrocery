import React from 'react'
import img1 from '../../ASSETS/Images/vegImage.jpeg'
import img2 from '../../ASSETS/Images/fruitImage.jpeg'
import './CategorySidebar.css'

const CategorySidebar = () => {
  return (
    <div>
        <div className='category'>
            <div className='vegetable'>
                <img src = {img1} alt='vegimage'/>
                <h2>vegetable</h2>
                <p>Explore More Items</p>
            </div>
            <div className='fruits'>
                <img src = {img2} alt='fruitimage'/>
                <h2>vegetable</h2>
                <p>Explore More Items</p>
            </div>
        </div>
    </div>
  )
}

export default CategorySidebar