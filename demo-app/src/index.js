import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';

import { CarToolStoreProvider } from './contexts/carToolStoreContext';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'red' },
  { id: 2, name: 'green' },
  { id: 3, name: 'blue' }
];



render(
  <>
    <ColorTool colors={colorList} />
    <CarToolStoreProvider>
      <CarTool />
    </CarToolStoreProvider>
    
  </>,
  document.querySelector('#root'),
);
