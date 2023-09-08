import React, { useState } from 'react'
import { data } from '../components/MyLinks';
import {sections, tabelementss} from '../components/MyLinks'
// import {AiOutlineHeart} from 'react-icons/ai'

// import '../App.css'
import { Link } from 'react-router-dom';


const TabElements = () => {

//   const [heading, setHeading] = useState("")


// const [toggle, setToggle] = useState(1)

// function updateToggle(id) {
//   setToggle(id)
// }

 // Your complex mock data array

const tabNames = ['Tab 1', 'Tab 2', 'Tab 3']; // Array for tab names

// const tabCount = tabNames.length; // Number of tabs
const itemsPerTab = 2; // Number of items to display per tab

// Initialize state to keep track of which elements to display in each tab and active tab index
const [activeTab, setActiveTab] = useState(0);

const handleTabClick = (tabNumber) => {
  setActiveTab(tabNumber);
};

// Calculate the starting and ending indices for the items to display in the active tab
const startIdx = activeTab * itemsPerTab;
const endIdx = startIdx + itemsPerTab;

// Get the items to display in the active tab based on the calculated indices
const tabData = data.slice(startIdx, endIdx);

  return (
    <div>
       <div className='flex justify-center items-center gap-12 lg:flex-row md:flex-col'>
        {tabNames.map((tabName, index) => (
          <button key={index} onClick={() => handleTabClick(index)}>
            {tabName}
          </button>
        ))}
      </div>
      <div className='flex items-center justify-center gap-80'>
        {tabData.map((item) => (
          <div key={item.id}>
            <img className='w-200' src={item.image} alt='img'/>
            <h4>{item.name}</h4>
            <h4>{item.description}</h4>
            <Link to={`/productinfo/${item.id}`}><button>More</button></Link>
          </div>
        ))}
      </div>
     
    </div>

    // <div className='container-fluid '>
    //   <div className='bloc-tabs '>
    //     <div className='flex justify-center flex-wrap lg:flex-nowrap md:flex-col lg:flex-row'>
    //     {sections.map((section, index) => (
    //       <h4 key={Math.floor(Math.random() * 1000)} className='tabs ml-6 px-3 w-auto' onClick={() => {
    //         if (heading !== section.section) {
    //             setHeading(section.section);
    //           } else {
    //             setHeading("");
    //           }updateToggle(index+1)
    //         }}>{section.section}</h4>
    //     ))}
    //     </div>
    //     <div className='relative pb-12 '>
    //       {tabelementss.map((ele, index) => (
    //         <div key={Math.floor(Math.random() * 1000)} className={toggle === index + 1 ? 'active-ss' : 'ss'}>
    //           <div className='flex justify-around flex-wrap lg:flex-nowrap gap-3'>
    //           {ele.contents?.map((content, key) => (
    //             <div key={Math.floor(Math.random() * 1000)} className='w-200 h-403 group bg-white relative flex flex-col align-bottom shadow-xl transition-all ease-in-out duration-300 hover:h-500'>
    //             <img src={content.img}/>
    //             <span className="info top-10 absolute inset-0 flex items-center justify-center text-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">  
    //               <h4>{content.name}</h4>
    //               <h4>{content.price}</h4>
    //               <Link to={`/productinfo/${ele.id}`}><button>ffffff</button></Link>
    //             </span> 
    //         <AiOutlineHeart/>
    //           </div>
    //           ))}
    //           </div>
    //       </div>
    //       ))}
    //     </div>      
    //   </div>
    // </div>
  )
}

export default TabElements