import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import SelectCountry from './components/SelectCountry';
import Chart from './components/Chart';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const onChangeCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <SelectCountry changeCountry={onChangeCountry} />
      <Canvas
        shadows
        camera={{
          position: [7, 7, 0],
        }}
      >
        <Chart selectedCountry={selectedCountry} />
      </Canvas>
    </div>
  );
};

export default App;
