import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";

export const CarTool = (props) => {

  return (
    <>
      {/* React.createElement(ToolHeader, { headerText: 'Car Tool' } />) */}
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={props.cars} />
    </>
  );

};