  import React from 'react'
  import { Link } from 'react-router-dom'
  import ProductList from './Productlist';



  const Hero = () => {
    const numberOfProductsToShow = 4;
    return (
      
      <div >
        <div className='h-full ml-24 mr-24 mt-36' style={{ marginTop: 'calc(6rem - 10px)' }}>
          <h2 className='text-center font-sans text-5xl pt-64'>Industrial design meets fashion.</h2>
          <p className=' text-xl font-sans font-medium mt-11 mb-16'>A typical leather goods</p>
          <Link  to="/Products"><a  className='button-color2 font-semibold '>Shop now</a></Link>
        </div>
        <div className=' bg-white mt-16 pt-10 pl-24 pr-24 z-50'>
          <div>
          <h2 className=' text-4xl'>Obsessive Attention. Intelligent Effort.</h2>
          <p className=' pt-9 pb-28'>Functional handbags made of luxurious materials to improve people's lives in small but mighty ways.</p>
          </div>
            <ProductList limit={numberOfProductsToShow} />
        </div>
      </div>
    )
  }

  export default Hero