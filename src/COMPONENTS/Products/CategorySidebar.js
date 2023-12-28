import React from 'react'
import img1 from '../../ASSETS/Images/vegImage.jpeg'
import img2 from '../../ASSETS/Images/fruitImage.jpeg'
import img3 from '../../ASSETS/Images/dairyproducts.jpeg'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id:1,
            image: img1,
            categoryName: "vegetable"
        },
        {
            id:2,
            image: img2,
            categoryName: "Fruits"
        },
        {
            id:3,
            image: img3,
            categoryName: "Dairy Products"
        },
        {
            id:4,
            image: img1,
            categoryName: "Green veggies"
        },
        {
            id:5,
            image: img2,
            categoryName: "Dry fruits"
        }
    ]
  return (
    <div className='categorysidebar'>
       {
        data.map((item) => {
            return(
                <div className='category'>
                <img src={item.image} alt='categoryimage'/>
                <h3>{item.categoryName}</h3>
                </div>
            )
        }
        )
       }
    </div>
  )
}

export default CategorySidebar