import React, {useRef} from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { urlFor } from '../lib/client';
import { stateContext } from '../context/Context';
import Link from 'next/link';


const Cart = ({ toggleCart }) => {
  const { items, total, add, reduceQty, remove } = stateContext();
  const cartRef = useRef();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={toggleCart}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({items.length} items)</span>
        </button>

        {items.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={toggleCart}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {items.length >= 1 && items.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className="minus" onClick={()=>reduceQty(item._id)}>
                      <AiOutlineMinus />
                      </span>
                      <span className="num">{item.quatity}</span>
                      <span className="plus" onClick={()=> add(item, 1)}><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={()=> remove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${total}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick="">
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart