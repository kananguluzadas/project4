import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { data } from '../components/MyLinks';
import { Link } from 'react-router-dom';

function SearchBar() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchIconClick = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    // Filter the data based on the search term
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filteredData);
  };

  const handleClearClick = () => {
    setSearchTerm('');
    setFilteredData([]);
    setSearchOpen(false); // Hide the input after clearing
  };

  const handleCloseDiv = () => {
    setSearchOpen(false); // Close the div when clicking on the product name
  };

  return (
    <div>
      <div className="relative flex gap-4 items-center">
        {isSearchOpen && (
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            autoFocus={true}
            onChange={handleSearchInputChange}
            className="border-none bg-transparent focus:outline-none absolute left-[-10rem] md:left-0 top-[-25px] text-lg py-[0.425rem] px-[0.2375rem] w-[13rem]"
          />
        )}
        <i
          className="cursor-pointer"
          onClick={isSearchOpen ? handleClearClick : handleSearchIconClick}
        >
          {isSearchOpen ? (
            <span className="flex items-center ml-[14.5rem] left-[-16.5rem] md:left-0 absolute top-[-15px] md:top-[-10px]">
              <AiOutlineClose /> <BsSearch className="ml-2" />
            </span>
          ) : (
            <BsSearch className='absolute right-0 top-[-15px] text-xl' />
          )}
        </i>
      </div>
      {searchTerm && (
        <div className={`${
          isSearchOpen ? 'absolute' : 'hidden'
        } flex flex-col gap-4 z-10 top-16 w-[17rem] bg-orange p-2`}>
          {filteredData.map((item, index) => (
            <div key={index} className='flex text-black gap-4'>
              <img className='w-[65px]' src={item.image} alt='img' />
              <Link to={`/productinfo/${item.id}`} onClick={handleCloseDiv}>
                <p>{item.name}</p>
              </Link>
              <span className='pl-12'>{item.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;