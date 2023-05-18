import { ContainerTextTour } from '@/components/Tour/Tour';

export const getTourSteps = () => {
  return [
    {
      selector: '.hm',
      content: 'teste',
    },
    {
      selector: '.dois',
      content: (
        <ContainerTextTour>
          <p>cat</p>
          <img src="https://i.gifer.com/7IsB.gif" alt="img" />
        </ContainerTextTour>
      ),
    },
  ];
};

interface NextButtonProps {
  isLastStep: boolean;
  setIsTourOpen: (isOpen: boolean) => void;
}

export function NextButton({ isLastStep, setIsTourOpen } : NextButtonProps) {
  return isLastStep ? (
    <span onClick={() => setIsTourOpen(false)}>finalizar</span>
  ) : (
    <span>Próximo</span>
  );
}

interface PrevButtonProps {
  isFirstStep: boolean;
  navigate: (path: string) => void;
}

export function PrevButton({ isFirstStep, navigate } : PrevButtonProps) {
  return (
    <span onClick={() => isFirstStep && navigate('/')}>Anterior</span>
  );
}

