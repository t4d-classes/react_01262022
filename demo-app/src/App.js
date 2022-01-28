import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ColorTool } from './components/ColorTool';
import { CarToolStoreProvider } from './contexts/carToolStoreContext';
import { CarTool } from './components/CarTool';


const colorList = [
  { id: 1, name: 'red' },
  { id: 2, name: 'green' },
  { id: 3, name: 'blue' }
];

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="color-tool"
          element={<ColorTool colors={colorList} />} />
        <Route path="car-tool" element={<CarToolStoreProvider>
          <CarTool />
        </CarToolStoreProvider>} />
      </Route>
    </Routes>
  );
};