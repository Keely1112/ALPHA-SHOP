import styles from './StepOne.module.css'
import stylesThree from './StepThree.module.css'
import { useCreditCard } from "./CheckoutContext";

export default function StepThree() {
  const { creditCard, setCreditCard } = useCreditCard();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCreditCard({
      ...creditCard,
      [name]: value,
    });
  };

  return (
    <>
    <div className={styles.container}>
        <form className={styles.formOne} data-phase="credit-card">
          <h3>付款資訊</h3>
          <section>
            <div>
                <div>
                <div className={styles.inputLabel}>持卡人姓名</div>
                <input 
                  name="cardholderName"
                  className={stylesThree.groupFirst}
                  type="text" 
                  placeholder="John Doe"
                  value={creditCard.cardholderName}
                  onChange={handleInputChange} />
              </div>
            </div>
            <div>
              <div>
                <div className={styles.inputLabel}>卡號</div>
                <input 
                  name="cardNumber"
                  className={stylesThree.groupFirst}
                  type="text" 
                  placeholder="1111 2222 3333 4444" 
                  value={creditCard.cardNumber}
                  onChange={handleInputChange}    
                  />
              </div>
            </div>
            <div className={styles.group}> 
              <div>
                <div className={styles.inputLabel}>有效期限</div>
                <input 
                  name="expirationDate"
                  className={styles.selectThree} 
                  type="text" 
                  placeholder="MM/YY" 
                  value={creditCard.expirationDate} 
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <div className={styles.inputLabel}>CVC / CCV</div>
                <input 
                  name="ccv"
                  className={styles.selectThree} 
                  type="text" 
                  placeholder={123}
                  value={creditCard.ccv}         
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}