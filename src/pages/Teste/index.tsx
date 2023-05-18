import { StyledTour } from '@/components/Tour/Tour';
import { NextButton, PrevButton, getTourSteps } from './steps/tourSteps';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { TourContext } from '@/context/TourContext';


export function Teste() {
  const { isTourOpen, closeTour, openTour} = useContext(TourContext);
  const navigate = useNavigate();
  const steps = getTourSteps();


  const handle = async () => {
    await navigate('/');
    openTour();
  };


  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  return (
    <div>
      <StyledTour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => closeTour()}
        nextButton={<NextButton isLastStep={isLastStep} setIsTourOpen={closeTour} />}
        prevButton={<PrevButton isFirstStep={isFirstStep} navigate={navigate} />}
        getCurrentStep={stepIndex => setCurrentStep(stepIndex)}
        startAt={currentStep}
      />
      <button onClick={handle}>Iniciar o tour novamente</button>
      <div className="hm">
        <p>Palavra dois</p>
      </div>
      <div className="dois">
        <p>conexão</p>
      </div>
      <Link to='/'>Clica aqui para voltar</Link>

    </div>
  );
}
