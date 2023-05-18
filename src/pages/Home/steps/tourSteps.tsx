import { ContainerTextTour } from '@/components/Tour/Tour';

export const getTourSteps = () => {
  return [
    {
      selector: '.my-first-step',
      content: 'ueue',
    },
    {
      selector: '.my-other-step',
      content: (
        <ContainerTextTour>
          <p>Hello</p>
          <img src="https://i.gifer.com/7IsB.gif" alt="img" />
        </ContainerTextTour>
      ),
    },
  ];
};

interface PrevButtonProps {
  isFirstStep: boolean;
  setIsTourOpen: (open: boolean) => void;
}

export function PrevButton({ isFirstStep, setIsTourOpen } : PrevButtonProps) {
  const prevButtonLabel = isFirstStep ? 'Cancelar' : 'Anterior';

  return (
    <span onClick={() => isFirstStep && setIsTourOpen(false)}>
      {prevButtonLabel}
    </span>
  );
}

interface NextButtonProps {
  isLastStep: boolean;
  navigate: (path: string) => void;
}

export function NextButton({ isLastStep, navigate } : NextButtonProps) {
  return isLastStep ? (
    <span onClick={() => isLastStep && navigate('/teste')}>Próximo</span>
  ) : (
    <span>Próximo</span>
  );
}
