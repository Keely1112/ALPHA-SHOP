import styles from './ProgressControl.module.css'
import rightArrow from '@/assets/icons/right-arrow.svg'

export default function ProgressControl({next, up, step}) {
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
          <button className="next">確認下單</button>
          </section>)}
        </div>
      </div>
    </>
  )
}