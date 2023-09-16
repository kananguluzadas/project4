import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Input from './Input'
import '../assets/styles/Header.scss';
import logo from '../assets/images/logo.png'
import {CiLocationOn} from 'react-icons/ci'
import {MdFavoriteBorder} from 'react-icons/md'
import {IoPersonOutline} from 'react-icons/io5'
import {BsBag, BsChevronRight} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import { data } from './MyLinks';
import SearchResultsList from './SearchResultsList';
import SearchBar from './SearchBar';



const Header = () => {
    const mockData = [
        {
            name:'Apple',
            image:'	https://courir.az/image/cache/fotos/810636-250x250.png'
        },
        {
            name: 'Banana'
        }
       
        // 'Cherry',
        // 'Date',
        // 'Grape',
        // 'Lemon',
        // 'Lime',
        // 'Mango',
        // 'Orange',
        // 'Peach',
        // 'Pear',
        // 'Pineapple',
        // 'Plum',
        // 'Raspberry',
        // 'Strawberry',
      ];
  return (
    <>
    <div className='top-bar'>
        <div className='top-left'>
            <Link to="/"><img src={logo} alt='courir logo' /></Link>
        </div>
        <div className='top-right'>
            <div className='pt-5'>
                <div className='pb-2'>
                    <SearchBar data={mockData} className="hidden lg:block outline-none bg-transparent text-white" type='text'/>
                    
                </div>
                <div className='w-[17rem] h-[1px] bg-white hidden md:block'></div>
            </div>
            
            {/* <SearchResultsList results={results}/> */}
            <ul>
                <li className='text-6xl'><Link to="/shops" className='li-link'><CiLocationOn fontSize={'1.6625rem'}/><span className='hidden lg:block'>Mağazalar</span></Link></li>
                <li><Link to="/favorites" className='li-link'><MdFavoriteBorder fontSize={'1.6625rem'}/><span className='hidden lg:block'>Seçilmiş</span></Link></li>
                <li><Link to="/myaccount" className='li-link'><IoPersonOutline fontSize={'1.6625rem'}/><span className='hidden lg:block'>Hesabım</span></Link></li>
                <li><Link to="/shoppingcart" className='li-link'><BsBag fontSize={'1.6625rem'}/><span className='hidden lg:block'>Səbət</span></Link></li>
            </ul>
        </div> 
    </div>
    <Navbar/>
    <div className='bottom-bar'>
        <span>Gün ərzində çatdırılma<BsChevronRight/></span>
    </div>
    </>
  )
}

export default Header