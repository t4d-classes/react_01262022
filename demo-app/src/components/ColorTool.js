export const ColorTool = (props) => {

  // props.colors.push({ id: 5, name: 'purple' });

  // props.newProp = 'test';

  props.colors = [];




  const colorsList = props.colors.map(c => <li key={c.id}>{c.name}</li>);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colorsList}
      </ul>
    </>
  );

};