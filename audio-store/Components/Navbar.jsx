import React, {useContext, useState} from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { stateContext } from '../context/Context';
import Cart from './Cart';

// import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { items } = stateContext();
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () =>{
    setShowCart(prevState => !prevState)
  }
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM Headphones</Link>
      </p>

      {!showCart && <button type="button" className="cart-icon" onClick={handleShowCart}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{items.length}</span>
      </button>}

      {showCart && <Cart toggleCart = { handleShowCart }/>}
    </div>
  )
}

export default Navbar