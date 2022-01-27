import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

import { CarViewRow } from './components/CarViewRow';

const colorList = [
  { id: 1, name: 'red' },
  { id: 2, name: 'green' },
  { id: 3, name: 'blue' }
];

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'red', price: 45000},
]

render(
  <>
    {/* React.createElement(ColorTool, { colors: colorList }) */}
    <ColorTool colors={colorList} />
    {/* <ColorTool colors={colorList} /> */}
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);
