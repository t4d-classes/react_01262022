import { createContext, useContext } from 'react';

import { useCarToolStoreAsync } from '../hooks/useCarToolStoreAsync';

const carToolStoreContext = createContext();

export const CarToolStoreProvider = ({ children }) => {

  return (
    <carToolStoreContext.Provider value={useCarToolStoreAsync()}>
      {children}
    </carToolStoreContext.Provider>
  );

};

export const useCarToolStoreContext = () => {
  return useContext(carToolStoreContext);
};
