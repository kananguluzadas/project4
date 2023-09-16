import React from 'react'

const SearchResultsList = ({results}) => {
  return (
    <div className='max-h-[200px] overflow-hidden'>
        {
            results.map((result, id) => {
                return <div key={id}>{result.name}</div>
            })
        }

    </div>
  )
}

export default SearchResultsList