import styles from './ProgressControl.module.css'
import rightArrow from '@/assets/icons/right-arrow.svg'
import { useCart } from '../../Cart/CartContext'
import { useCreditCard } from "../StepForm/CheckoutContext";

export default function ProgressControl({next, up, step}) {

  const { total } = useCart();
  const { creditCard } = useCreditCard();

  const handleConfirmOrder = () => {
  console.log("Cardholder Name:", creditCard.cardholderName);
  console.log("Card Number:", creditCard.cardNumber);
  console.log("Expiration Date:", creditCard.expirationDate);
  console.log("CCV:", creditCard.ccv);
  console.log("Total Amount:", total);
}
  return (
    <>
      <hr />
      <div className={styles.container}>
        <div className={styles.control}>
          {step > 1 && (<section className={styles.back} data-phase="shipping">
          <button onClick={up} style={{cursor: "pointer"}} className={styles.buttonTwo} >
            <img src={rightArrow} alt="rightArrow" style={{transform: 'rotate(180deg'}}/> 上一步 
          </button>
          </section>)}
          {step < 3 && (<section className={styles.next} data-phase="address">
          <button onClick={next} style={{cursor: "pointer"}}> 下一步 <img src={rightArrow} alt="rightArrow" />
          </button>
          </section>)}
          {step === 3 && (<section className="button-group" data-phase="credit-card">
          <button onClick={handleConfirmOrder} className="next">確認下單</button>
          </section>)}
        </div>
      </div>
    </>
  )
}