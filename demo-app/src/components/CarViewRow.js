export const CarViewRow = (props) => {

  // const deleteCar = () => {
  //   props.onDeleteCar(props.car.id);
  // }

  return (
    <tr>
      {/* React.createElement('td', { children: props.car.id }) */}
      <td>{props.car.id}</td>
      <td>{props.car.make}</td>
      <td>{props.car.model}</td>
      <td>{props.car.year}</td>
      <td>{props.car.color}</td>
      <td>{props.car.price}</td>
      <td>
        {/* <button type="button" onClick={deleteCar}>Delete</button> */}
        <button type="button"
          onClick={() => props.onDeleteCar(props.car.id)}>Delete</button>
      </td>
    </tr>
  )
}