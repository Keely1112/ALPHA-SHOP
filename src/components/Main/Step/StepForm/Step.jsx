import StepProgress from '../StepProgress/StepProgress'
// import StepOne from './StepOne'
import ProgressControl from '../ProgressControl/ProgressControl'
// import StepTwo from './StepTwo'
import StepThree from './StepThree'

 export default function Step() {
  return (
    <>
      <main className="site-main">
        <div className="main-container">   
            <section className="step-progress-container">
              <StepProgress />
            </section>
            <section className="form-container">
              {/* <StepOne /> */}
              {/* <StepTwo /> */}
              <StepThree />
            </section>
            <section className="progress-control-container">
              <ProgressControl />
          </section>
        </div>
      </main>
    </>
  )
 }
