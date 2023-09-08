import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Input from './Input'
import '../assets/styles/Header.scss';
import logo from '../assets/images/logo.png'
import {CiLocationOn} from 'react-icons/ci'
import {MdFavoriteBorder} from 'react-icons/md'
import {IoPersonOutline} from 'react-icons/io5'
import {BsBag, BsChevronRight} from 'react-icons/bs'




const Header = () => {
  return (
    <>
    <div className='top-bar'>
        <div className='top-left'>
            <Link to="/"><img src={logo} alt='courir logo' /></Link>
        </div>
        <div className='top-right'>
            <Input className="hidden lg:block outline-none" type='text'/>
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