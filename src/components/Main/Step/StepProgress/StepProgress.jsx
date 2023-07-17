export default function StepProgress() {
  return (
    <>
      <section
        data-phase={1}
        data-total-price={0}
      >
        <h2>結帳</h2>

        <section>
          <span data-phase="address">
            <span>
              <span>1</span>
            </span>
            <span>寄送地址</span>
          </span>
          <span data-order={1} />
          <span data-phase="shipping">
            <span>
              <span>2</span>
            </span>
            <span>運送方式</span>
          </span>
          <span data-order={2} />
          <span data-phase="credit-card">
            <span>
              <span>3</span>
            </span>
            <span>付款資訊</span>
          </span>
        </section>
      </section>
    </>
  );
}