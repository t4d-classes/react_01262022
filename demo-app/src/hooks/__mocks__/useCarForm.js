
export const addCarSpy = jest.fn();


export const useCarForm = () => {
  return {
    addCar: addCarSpy,
  };
}