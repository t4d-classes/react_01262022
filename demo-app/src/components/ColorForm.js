import { useState } from 'react';

export const ColorForm = () => {

  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  });

  const change = e => {

    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    })

  };

  console.log(colorForm);

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>
      <label>
        Hexcode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button">Submit Color</button>
    </form>
  );

};