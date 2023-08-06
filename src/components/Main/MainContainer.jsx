import Step from "./Step/StepForm/Step";
import Cart from "./Cart/Cart";
import { CartProvider } from "./Cart/CartContext";
import { CreditCardProvider } from "./Step/StepForm/CheckoutContext";
import './MainContainer.css'

export default function MainContainer() {
  return (
    <CreditCardProvider>
      <CartProvider>
        <div className="main-container">
          <div className="step">
            <Step />
          </div>
          <div className="cart">
            <Cart />
          </div>
        </div>
      </CartProvider>
    </CreditCardProvider>
  )
}