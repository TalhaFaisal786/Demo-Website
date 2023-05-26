import React, { Fragment } from 'react'

const FirstPage = () => {

  const  decoration='font-bold ';
  return (
    <Fragment>
      <div className='ml-72 mt-36   '>
        <h1 className='text-4xl font-sans' >Connect To The Grid <br /><span className={decoration} >Safely</span> And <span className={decoration}>Efficiently</span> </h1><br />
        <p className='text-sm '>We're a team of IT Engineers that make sure <br /> that you get  your grid connection,  are  allowed <br /> to feed in safely and  recieve feed-in tariff,<br /> Hassle free. </p>
        <button className='bg-blue-400 px-4 py-2 mt-4 text-sm text-white hover:text-black '> Connect me to the grid</button>
      </div>
      <div className=' flex place-content-end mr-50'>
      <img src="https://www.performanceservices.com/wp-content/uploads/2023/03/PSI-Hard-Hat-Solar-Array-scaled.jpg" alt=""  className='w-2/12 h-96 -mt-72 mr-6' />
      <img src="https://i1.wp.com/www.barqaab.com.pk/wp-content/uploads/2020/01/Title-3.jpg?fit=855%2C641&ssl=1" alt=""  className='w-2/12 h-96 -mt-96 mr-5' />
      </div>
    </Fragment>
  )
}

export default FirstPage
