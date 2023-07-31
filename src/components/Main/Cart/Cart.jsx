import style from './Cart.module.css'
import minus from '@/assets/icons/minus.svg'
import plus from '@/assets/icons/plus.svg'
import { useState } from 'react'
 
const cartData = [{
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 1,
  },{
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  }]


export default function Cart() {
  const [cart, setCart] = useState(cartData)
  const handlePlusQuentity= (id) => {
    setCart(cart.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      } else {
        return item
      }
    }))
  }

  const handleMinusQuentity= (id) => {
    setCart(cart.map(item => {
      if(item.id === id) {
        const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
        return {
          ...item,
          quantity: newQuantity
        }
      } else {
        return item
      }
    }))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className={style.cartContainer}>
      <h3>購物籃</h3>
      <section data-total-price={0}>
            { cart.map(data => 
              <div
                className={style.productContainer}
                data-count={0}
                data-price={3999}
                key={data.id}
              >
                <img className={style.imgContainer} src={data.img} />
                <div className={style.productInfo}>
                  <div className={style.productTitle}>
                    <div className={style.productName}>{data.name}</div>
                    <div className={style.productPrice}>${data.price * data.quantity}</div>
                  </div>
                  <div className={style.controlContainer}>
                    <div className={style.productControl}>
                      <img style={{cursor: "pointer"}} src={minus} alt="minus" onClick={() => handleMinusQuentity(data.id)} />
                      <span className={style.productCount}>{data.quantity}</span>
                      <img style={{cursor: "pointer"}} src={plus} alt="plus" onClick={() => handlePlusQuentity(data.id)} />
                    </div>
                  </div>
              </div>
          </div> 
        )}   
      </section>
      <section className={style.cartShipping}>
        <div className={style.text}>運費</div>
        <div className={style.price}>免費</div>
      </section>
      <section className={style.total}>
        <div className={style.text}>小計</div>
        <div className={style.price}>{total}</div>
      </section>
    </section>
)}