

export const ColorList = (props) => {

  const colorsList = props.colors.map(c =>
    <li key={c.id}>{c.name}</li>);

  return (
    <ul>
      {colorsList}
    </ul>    
  );

};