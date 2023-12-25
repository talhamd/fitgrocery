import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

  
const BannerSlider = () => {
 const data = [
    {
        id:1,
        image:  'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: "Fresh Veggies and More",
        description: "Bait to your taste and your health.",
        button: 'htttps://www.google.com'
    },

    {
        id:2,
        image: 'https://media.istockphoto.com/id/183803376/photo/mixed-nuts-and-dried-fruits.webp?b=1&s=170667a&w=0&k=20&c=kNrk41OV8nsJ2qIt-PUBFQGZzsxIJo13XhRuehHZSzw=',
        title: "Fruits and Nuts",
        description: "Taste and health - An apple a day",
        button: 'htttps://www.google.com'
        },

    {
        id:3,
        image: "https://media.istockphoto.com/id/544807136/photo/various-fresh-dairy-products.webp?b=1&s=170667a&w=0&k=20&c=_bPf74KwvbgvJjrMEGdRceBJsjptEWkGm-65h5aZ-x4=",
        title: "Milk and more",
        description: "Dairy delights - the healthy treat to your family.",
        button: 'htttps://www.google.com'
    },

    {
        id: 4,
        image:"https://media.istockphoto.com/id/1031043754/photo/new-modern-living-room-with-kitchen-new-home-interior-photography-wooden-floor.webp?b=1&s=170667a&w=0&k=20&c=HfFTZbUziIq3xsEQ9jrIDcUPPQdaoW2AH9BpSI_9PtU=",
        title:'Kithen Hygiene',
        description: "For the after care.",
        button: 'htttps://www.google.com'
    }
       

 ];

 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='bannerslider'>
        <Slider className='bannerslider' {...settings}>
        
        {
               data.map(item => {
                return(
                    <div className='imagecont' key={item.id} >
                        <img src= {item.image} alt = 'noimg' />
                        <div className='content'>
                            <h1>{item.title}</h1>
                            <span>{item.description}</span>
                            <button>Shop More</button>
                        </div>
                    </div>
                )
               })
            }
        </Slider>
    </div>
  )
}

export default BannerSlider;