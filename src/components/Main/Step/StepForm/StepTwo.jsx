import styles from './StepOne.module.css'
import stylesTwo from './StepTwo.module.css'

export default function StepTwo() {
  return (
    <>
      <form className={styles.formOne} data-phase="shipping">
        <h3>運送方式</h3>
        <section>
          <label data-price={0}>
            <input
              id="shipping-standard"
              type="radio"
              name="shipping"
              defaultChecked=""
            />
            <div>
              <div>
                <div>標準運送</div>
                <div className="price" />
              </div>
              <div>約 3~7 個工作天</div>
            </div>
            <div />
          </label>
          <label data-price={500}>
            <input id="shipping-dhl" type="radio" name="shipping" />
            <div>
              <div>
                <div>DHL 貨運</div>
                <div className="price" />
              </div>
              <div>48 小時內送達</div>
            </div>
            <div />
          </label>
        </section>
      </form>
    </>
  );
}