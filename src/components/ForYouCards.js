import React from 'react'






const ForYouCards = ({gender, src}) => {
  return (
    <div className='relative'>
      <div className='relative z-0 card-wrapper transition-all duration-500 ease-in-out hover:transform hover:translate-x-3.5 hover:translate-y-3.5'>
          <img src={src} alt='img'/>
      </div>
      <div className='absolute right-[22px] bottom-[-12px] z-10 py-2 px-10 text-sm te bg-black text-white flex items-center justify-center'>
        <span>{gender}</span>
      </div>
    </div>
    
  )
}

export default ForYouCards