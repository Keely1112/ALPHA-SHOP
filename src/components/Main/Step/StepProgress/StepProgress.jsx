import styles from './StepProgress.module.css'

export default function StepProgress() {
  const phases = [
    { phase: "address", title: "寄送地址" },
    { phase: "shipping", title: "運送方式" },
    { phase: "credit-card", title: "付款資訊" },
  ]

  return (
    <>
      <section
        data-phase={1}
        data-total-price={0}
      >
        <h2>結帳</h2>

        <div className={styles.container}>
          {phases.map((phase, index) => (
            <span data-phase={phase.phase} key={index} className={styles.phaseContainer}>
              <span>
                <span className={styles.border}>{index + 1}</span>
              </span>
              <span className={styles.title}>{phase.title}</span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}