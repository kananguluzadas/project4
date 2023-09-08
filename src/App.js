import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Man from './pages/Man';
import NotFound from './pages/NotFound';
import Child from './pages/Child';
import GiftCards from './pages/GiftCards';
import Sales from './pages/Sales';
import Woman from './pages/Woman';
import MyAccount from './pages/MyAccount';
import Shops from './pages/Shops';
import Card from './pages/Card';
import Favorites from './pages/Favorites';
import ShoppingCart from './components/ShoppingCart';
import { CartProvider } from './components/CartProducts';
import ProductInfo from './pages/ProductInfo';
import { useState, useEffect } from 'react';
import {FaChevronUp} from 'react-icons/fa'


function App() {


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check if the button should be visible
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };


  return (
    <div className="App">
      <>
      {isVisible && (
        <button
          className="fixed bottom-0 z-50 left-0 p-4 bg-white text-black"
          onClick={scrollToTop}
        >
          <FaChevronUp className='text-2xl'/>
        </button>
      )}
      <CartProvider>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shops" element={<Shops/>}/>
            <Route path="/myaccount" element={<MyAccount/>}/>
            <Route path="/card" element={<Card/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/man" element={<Man/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/woman" element={<Woman/>}/>
            <Route path="/child" element={<Child/>}/>
            <Route path="/sales" element={<Sales/>}/>
            <Route path="/giftcards" element={<GiftCards/>}/>
            <Route path="/productinfo/:ids" element={<ProductInfo/>}/>
            <Route path="/shoppingcart" element={<ShoppingCart/>}/>
            
          </Routes>
        <Footer/>
      </CartProvider>
      </>
    </div>
  );
}

export default App;
