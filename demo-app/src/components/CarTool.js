import { useCarToolStore } from '../hooks/useCarToolStore';
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export const CarTool = (props) => {

  const {
    cars, editCarId, editCar, cancelCar, addCar, saveCar, deleteCar 
  } = useCarToolStore([...props.cars]);


  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar}
        onDeleteCar={deleteCar}
        onSaveCar={saveCar}
        onCancelCar={cancelCar} />
      <CarForm onSubmitCar={addCar} />
    </>
  );

};