export const ColorTool = (props) => {



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