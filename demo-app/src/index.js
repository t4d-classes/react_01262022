import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'red' },
  { id: 2, name: 'green' },
  { id: 3, name: 'blue' }
];

const carList = [
  {
    id: 1,
    make: 'Ford',
    model: 'Fusion Hybrid',
    year: 2019,
    color: 'blue',
    price: 45000,
  },
  {
    id: 2,
    make: 'Tesla',
    model: 'S',
    year: 2020,
    color: 'red',
    price: 120000,
  },  
];

render(
  <>
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);
