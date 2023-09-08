import React from 'react'



const SectionName = ({children, className}) => {
  return (
    <div className='section-name'>
        <span className={className}>{children}</span>
    </div>
  )
}

export default SectionName