export const ColorTool = () => {

  const colors = [
    { id: 1, name: 'red' },
    { id: 2, name: 'green' },
    { id: 3, name: 'blue' }
  ];

  const colorsList = colors.map(c => <li key={c.id}>{c.name}</li>);

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