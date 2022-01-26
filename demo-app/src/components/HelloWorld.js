export const HelloWorld = () => {

  // Not valid
  // React.createElement('h1', null, 'Hello, World!')React.createElement('span', null, 'test')

  // Valid
  // React.createElement(React.Fragment, null,
  //   React.createElement('h1', null, 'Hello, World!'),
  //   React.createElement('span', null, 'test'));
  return (
    <>
      <h1>Hello, World!</h1>
      <span>test</span>
    </>
  );

};