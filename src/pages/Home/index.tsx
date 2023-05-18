import { Button } from '@/components/Button';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledTour } from '@/components/Tour/Tour';
import { NextButton, PrevButton, getTourSteps } from './steps/tourSteps';
import { TourContext } from '@/context/TourContext';

export function Home() {

  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();

  const { isTourOpen, closeTour, openTour} = useContext(TourContext);

  const steps = getTourSteps();

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  return (
    <>
      <StyledTour
        className="no-bullet"
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => closeTour()}
        nextButton={<NextButton isLastStep={isLastStep} navigate={navigate} />}
        getCurrentStep={(stepIndex) => setCurrentStep(stepIndex)}
        prevButton={<PrevButton isFirstStep={isFirstStep} setIsTourOpen={closeTour} />}
      />
      <div className="my-first-step" style={{width: '80px'}}>
        <p>Palavra um</p>
      </div>
      <div>
        <p>Palavra dois</p>
      </div>
      <Button />
      <button onClick={() => openTour()}>Iniciar o tour novamente</button>
    </>
  );
}
