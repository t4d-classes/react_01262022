import { useCarToolStoreContext } from '../contexts/carToolStoreContext';

export const useCarForm = () => {

  const { addCar } = useCarToolStoreContext();

  return {
    addCar
  };

};