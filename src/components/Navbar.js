
// import {FaChevronDown} from 'react-icons/fa'
// import {HiMenu} from 'react-icons/hi'
// import {BsArrowLeft} from 'react-icons/bs'
// import '../assets/styles/Navbar.css'
// import Dropdown from './Dropdown'
// import Button from './Button'



import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
import Button from "../components/Button";
import NavLinks from '../components/Navlinks';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { brandLinks } from "./BrandLinks";
import BrandLinks from "./BrandLinks";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center font-bold text-sm start-0">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoCloseOutline /> : <IoMenuOutline />}
          </div>
        </div>
        <ul className="py-3 md:flex hidden uppercase items-center gap-8 font-[Poppins] tracking-wider">
          <NavLinks />
          <BrandLinks/>
        </ul>
  
        {/* Mobile nav */}
        <ul
          className={`
          md:hidden bg-white text-center fixed z-30 w-full h-100 top-0 overflow-y-auto bottom-0 py-24 pl-4
          duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li className="text-left">
            <Link to="/" className="py-3 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks/>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



// const Navbar = () => {
  // const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false)


  // const handleClick = () => {
  //   setClick(!click);
  // };

  // const closeMobileMenu = () => setClick(false)

  // const onMouseEnter = () => {
  //   if(window.innerWidth < 960) {
  //     setDropdown(false)
  //   } else{
  //     setDropdown(true)
  //   }
  // }

  // const onMouseLeave = () => {
  //   if(window.innerWidth < 960) {
  //     setDropdown(false)
  //   } else{
  //     setDropdown(false)
  //   }
  // }



  // return (
  //   <>
  //     <nav className='navbar'>
  //       {/* <ul>
  //         <li>
  //           <Link to='/woman' className='second-li-link'>Qadın<FaChevronDown className='icon'/></Link>
  //         </li>
  //         <li><Link to='/man' className='second-li-link'>Kişi<FaChevronDown/></Link></li>
  //         <li><Link to='child' className='second-li-link'>Uşaq<FaChevronDown/></Link></li>
  //         <li><Link to='/brand' className='second-li-link'>Brend<FaChevronDown/></Link></li>
  //         <li><Link to='/giftcards' className='second-li-link'>Hədiyyə Kart</Link></li>
  //         <li><Link to='/sales' className='second-li-link'>Endirimlər</Link></li>
  //       </ul> */}
  //       <div className='menu-icon' onClick={handleClick}>
  //         {click ? <BsArrowLeft className='fa-times'/> : <HiMenu className='fa-bars'/>}
  //       </div>

  //       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
  //         <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='nav-item'>
  //           <Link to='/woman' className='nav-links' onClick={closeMobileMenu}>
  //             Qadın<FaChevronDown className='fas fa-caret-down'/>
  //           </Link>
  //           {dropdown && <Dropdown/>}
  //         </li>
  //         <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='nav-item'>
  //           <Link to='/man' className='nav-links' onClick={closeMobileMenu}>
  //             Kişi<FaChevronDown className='fas fa-caret-down'/>
  //           </Link>
  //           {dropdown && <Dropdown/>}
  //         </li>
  //         <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='nav-item'>
  //           <Link to='/child' className='nav-links' onClick={closeMobileMenu}>
  //             Uşaq<FaChevronDown className='fas fa-caret-down'/>
  //           </Link>
  //           {dropdown && <Dropdown/>}
  //         </li>
  //         <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='nav-item'>
  //           <Link to='/brand' className='nav-links' onClick={closeMobileMenu}>
  //             Brend<FaChevronDown className='fas fa-caret-down'/>
  //           </Link>
  //           {dropdown && <Dropdown/>}
  //         </li>
  //         <li className='nav-item'>
  //           <Link to='/giftcards' className='nav-links' onClick={closeMobileMenu}>
  //             Hədiyyə Kart
  //           </Link>
  //         </li>
  //         <li className='nav-item'>
  //           <Link to='/sales' className='nav-links' onClick={closeMobileMenu}>
  //             Endirimlər
  //           </Link>
  //         </li>
  //       </ul>
  //       {/* <span className='sneaker-spirit'>
  //         <p>Sneaker Spirit</p>
  //       </span> */}
  //     </nav>
  //   </>
  // )
// }

// export default Navbar