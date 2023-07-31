import './StepStyle.css'
import StepProgress from '../StepProgress/StepProgress'
import StepOne from './StepOne'
import ProgressControl from '../ProgressControl/ProgressControl'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import { useState } from 'react'

 export default function Step() {

  const [step, setStep] = useState(1)

  const handleNext = () => {
    if(step < 3) {
      setStep(prevStep => prevStep + 1)
    }
  }

  const handleUp = () => {
    if(step > 1) {
      setStep(prevStep => prevStep - 1)
    }
  }
  return (
    <>
      <main className="site-main">
        <div className="main-container">   
            <section className="step-progress-container">
              <StepProgress step={step}/>
            </section>
            <section className="form-container">
              {step === 1 && <StepOne />}
              {step === 2 && <StepTwo />}
              {step === 3 && <StepThree />}
            </section>
            <section className="progress-control-container">
              <ProgressControl next={handleNext} up={handleUp} step={step} />
          </section>
        </div>
      </main>
    </>
  )
 }


