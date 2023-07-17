export default function StepThree() {
  return (
    <>
      <form data-phase="credit-card">
        <h3>付款資訊</h3>
        <section>
          <div>
            <div>
              <div>持卡人姓名</div>
              <input type="text" placeholder="John Doe" />
            </div>
          </div>
          <div>
            <div>
              <div>卡號</div>
              <input type="text" placeholder="1111 2222 3333 4444" />
            </div>
          </div>
          <div>
            <div>
              <div>有效期限</div>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div>
              <div>CVC / CCV</div>
              <input type="text" placeholder={123} />
            </div>
          </div>
        </section>
      </form>
    </>
  );
}