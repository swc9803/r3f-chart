import './App.css';
import { Canvas } from '@react-three/fiber';
import SelectCountry from './components/SelectCountry';
import Chart from './components/Chart';

const App = () => {
  return (
    <div>
      <SelectCountry />
      <Canvas
        shadows
        camera={{
          position: [7, 7, 0],
        }}
      >
        <Chart />
      </Canvas>
    </div>
  );
};

export default App;
