import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import Input from './Input'
import {FaInstagram, FaFacebookF} from 'react-icons/fa'
import {BiEnvelope} from 'react-icons/bi'
import SectionName from './SectionName'


const Footer = () => {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9•-]+\.com$/g
    if(regEx.test(email)){
      setMessage("Email is true")
      } else if(!regEx.test(email) && email !== ""){
        setMessage("Email is not valid")
      } else{
      setMessage("")
    }
  }

  const handleOnchange = (e) => {
    setEmail(e.target.value)
  }

  

  return (
    <footer className='pt-10'>
      <div className=' grid bg-footer-top gap-80 py-16 px-8 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2'>
        <div className=''>
          <img src={logo} alt='img'/>
        </div>
        <div className=''>
          <div className='flex items-center border-b-2 pr-0 text-md w-200 border-gray border-opacity-10'>
            <label htmlFor=''><BiEnvelope/></label>
            <Input type='text' placeholder="Elektron poct" onChange={handleOnchange} className=" ml-3 outline-none bg-transparent"/>
            <Input type="submit" value="Abune olun" className="text-orange -ml-3" onClick={emailValidation}/>
          </div>
          
          <p>{message}</p>
        </div>
        <div className='ml-8'>
          <h5 className='text-left font-medium'>Şirkət haqqında</h5>
          <ul className='text-left text-sm pt-5 leading-7'>
            <li><Link>Haqqımızda</Link></li>
            <li><Link>Məxfilik siyasəti</Link></li>
            <li><Link>Geri qaytarma və dəyişdirmə</Link></li>
            <li><Link>Brend</Link></li>
            <li><Link>Çatdırılma</Link></li>
            <li><Link>Əlaqə</Link></li>
          </ul>
        </div>
        <div className='text-left ml-5'>
          <span>Bizi izləyin</span>
          <div className='flex gap-3 pt-5 lg:pt-3'>
            <div className='w-40 h-40 bg-black rounded-full py-2.5 px-2.5'>
              <FaFacebookF className='text-white text-xl'/>
            </div>
            <div className=' w-40 h-40 bg-black rounded-full py-2.5 px-2.5'>
              <FaInstagram className='text-white text-xl'/>
            </div>
          </div>
        </div>
        <div><Link className='relative' to='sneakerspirit.courir.com/fr/'><SectionName className="text-3xl font-bold p-6 text-left after:content-[''] after:w-30 after:h-5 after:bg-orange after:block after:absolute after:bottom-[5px] after:right-[20px] uppercase leading-9 " children="Sneaker Spirit"/></Link></div>
      </div>
      <div className='text-left py-4 pl-16 bg-footer-bottom'>
        <span className='text-md'>© 2022 - Courir. Bütün hüquqlar qorunur.</span>
      </div>
    </footer>
  )
}

export default Footer