export default function ProgressControl() {
  return (
    <>
      <section className="button-group" data-phase="address">
        <button className="next">
          下一步
        </button>
      </section>
      {/* <section className="button-group" data-phase="shipping">
        <button className="prev">
          上一步
        </button>
        <button className="next">
          下一步
          <object
            data="./public/icons/right-arrow.svg"
            className="cursor-point"
          ></object>
        </button>
      </section>
      <section className="button-group" data-phase="credit-card">
        <button className="prev">
          上一步
        </button>
        <button className="next">確認下單</button>
      </section> */}
    </>
  )
}