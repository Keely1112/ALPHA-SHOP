 import style from './Cart.module.css'
 import minus from '@/assets/icons/minus.svg'
 import plus from '@/assets/icons/plus.svg'
 

 export default function Cart() {
 return(
  <section className={style.cartContainer}>
    <h3 className="cart-title">購物籃</h3>
    <section className="product-list" data-total-price={0}>
      <div
        className={style.productContainer}
        data-count={0}
        data-price={3999}
      >
        <img className={style.imgContainer} src="https://picsum.photos/300/300?text=1" />
        <div className={style.productInfo}>
          <div className={style.productTitle}>
            <div className={style.productName}>破壞補丁修身牛仔褲</div>
            <div className={style.productPrice}>$999</div>
          </div>
          <div className={style.controlContainer}>
            <div className={style.productControl}>
              <img src={minus} alt="minus" />
                <span className={style.productCount}>1</span>
              <img src={plus} alt="plus" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={style.productContainer}
        data-count={0}
        data-price={1299}
      >
        <img className={style.imgContainer} src="https://picsum.photos/300/300?text=1" />
        <div className={style.productInfo}>
          <div className={style.productTitle}>
            <div className={style.productName}>破壞補丁修身牛仔褲</div>
            <div className={style.productPrice}>$999</div>
          </div>
          <div className={style.controlContainer}>
            <div className={style.productControl}>
              <img src={minus} alt="minus" />
                <span className={style.productCount}>1</span>
              <img src={plus} alt="plus" />
            </div>
          </div>
        </div>
      </div>
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