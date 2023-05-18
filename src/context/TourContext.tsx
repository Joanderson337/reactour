import { createContext, FunctionComponent, ReactNode, useState, useEffect } from 'react';

interface ITour {
  openTour: () => void;
  closeTour: () => void;
  isTourOpen: boolean;
}

export const TourContext = createContext<ITour>({
  openTour: () => {},
  closeTour: () => {},
  isTourOpen: true,
});

interface ITourContextProvider {
  children: ReactNode;
}

const TourContextProvider: FunctionComponent<ITourContextProvider> = ({ children }) => {
  const [isTourOpen, setIsTourOpen] = useState<boolean>(
    JSON.parse(localStorage.getItem('isTourOpen') || 'true')
  );


  const openTour = () => {
    setIsTourOpen(true);
  };

  const closeTour = () => {
    setIsTourOpen(false);
  };

  useEffect(() => {
    localStorage.setItem('isTourOpen', JSON.stringify(isTourOpen));
  }, [isTourOpen]);

  return (
    <TourContext.Provider value={{ isTourOpen, openTour, closeTour }}>
      {children}
    </TourContext.Provider>
  );
};

export default TourContextProvider;
