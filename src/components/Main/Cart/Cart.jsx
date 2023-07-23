import style from './Cart.module.css'
import minus from '@/assets/icons/minus.svg'
import plus from '@/assets/icons/plus.svg'
 
const cartData = [{
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },{
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  }]


export default function Cart() {

  return (
    <section className={style.cartContainer}>
      <h3>購物籃</h3>
      <section data-total-price={0}>
            { cartData.map(data => 
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
                    <div className={style.productPrice}>${data.price}</div>
                  </div>
                  <div className={style.controlContainer}>
                    <div className={style.productControl}>
                      <img src={minus} alt="minus" />
                      <span className={style.productCount}>{data.quantity}</span>
                      <img src={plus} alt="plus" />
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
        <div className={style.price}>$1998</div>
      </section>
    </section>
)}