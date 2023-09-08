import React from 'react'
import '../assets/styles/Collections.scss'





const Collections = ({ brands, src}) => {
  return (
    <div className='collec-wrapper'>
      <img src={src} alt='img'/>
      <div className='brand-btn'>{brands}</div>
      {/* <button className='w-70% h-55 bg-pink absolute z-10 bottom-[-25px] left-[15px]'>{brands}</button> */}
    </div>
  )
}

export default Collections