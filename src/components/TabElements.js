import React, { useState } from 'react'
import { data } from '../components/MyLinks';
import {sections, tabelementss} from '../components/MyLinks'
// import {AiOutlineHeart} from 'react-icons/ai'

import '../App.css'
import { Link } from 'react-router-dom';


const TabElements = () => {

//   const [heading, setHeading] = useState("")


// const [toggle, setToggle] = useState(1)

// function updateToggle(id) {
//   setToggle(id)
// }

 // Your complex mock data array

const tabNames = ['Yeni', 'Endirimlər', 'Çox alınan']; // Array for tab names

// const tabCount = tabNames.length; // Number of tabs
const itemsPerTab = 8; // Number of items to display per tab

// Initialize state to keep track of which elements to display in each tab and active tab index
const [activeTab, setActiveTab] = useState(0);
// const [isHovered, setIsHovered] = useState(false);

//   // Function to handle hover events
//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };
//   // Define Tailwind CSS classes for normal and hover states
//   const normalStyle = 'bg-blue p-4';
//   const hoverStyle = 'bg-pink p-4'; // Change this to your desired hover style

//   // Apply the appropriate style based on hover state
//   const containerStyle = isHovered ? hoverStyle : normalStyle;
const startIdx = activeTab * itemsPerTab;
const endIdx = startIdx + itemsPerTab;
const tabData = data.slice(startIdx, endIdx);
const [hoveredCards, setHoveredCards] = useState(Array(tabData.length).fill(false));

  const handleCardHover = (index) => {
    const updatedHoveredCards = [...hoveredCards];
    updatedHoveredCards[index] = true;
    setHoveredCards(updatedHoveredCards);
  };

  const handleCardLeave = (index) => {
    const updatedHoveredCards = [...hoveredCards];
    updatedHoveredCards[index] = false;
    setHoveredCards(updatedHoveredCards);
  };
const handleTabClick = (tabNumber) => {
  setActiveTab(tabNumber);
};

// Calculate the starting and ending indices for the items to display in the active tab


// Get the items to display in the active tab based on the calculated indices

const [hovered, setHovered] = useState(false);
  return (
    <div className=''>
       <div className='flex justify-center items-center gap-8 lg:flex-row md:flex-col md:gap-3'>
        {tabNames.map((tabName, index) => (
          <button className='xl:text-5xl sm:text-2xl font-bold lg:pb-10 sm:pb-5' key={index} onClick={() => handleTabClick(index)}>
            {tabName.toUpperCase()}
            {index < 2 ? <span className='ml-5'>/</span> : ''}
          </button>
        ))}
      </div>
      <div className='flex flex-wrap items-center justify-center gap-80 relative '>
      {tabData.map((item, index) => (
        <div
          key={item.id}
          className={`relative card ${hoveredCards[index] ? 'card-hovered' : ''}`}
          onMouseEnter={() => handleCardHover(index)}
          onMouseLeave={() => handleCardLeave(index)}
        >
          <img className='w-200' src={item.image} alt='img' />
          <div className='flex justify-between'>
            <h4>{item.name}</h4>
            <h4>{item.price} ₼</h4>
          </div>
          <Link className='float-left px-8 py-2 bg-black text-white' to={`/productinfo/${item.id}`}>
            <button>More</button>
          </Link>
        </div>
      ))}
      </div>    
    </div>
  )
}

export default TabElements