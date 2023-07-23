import Step from "./Step/StepForm/Step";
import Cart from "./Cart/Cart";
import './MainContainer.css'

export default function MainContainer() {
  return (
    <div className="main-container">
      <div className="step">
        <Step />
      </div>
      <div className="cart">
        <Cart />
      </div>
    </div>
  )
}