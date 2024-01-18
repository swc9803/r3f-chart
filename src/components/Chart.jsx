import { useEffect } from 'react';

const Chart = ({ selectedCountry }) => {
  useEffect(() => {
    if (selectedCountry) {
      console.log(`${selectedCountry} 선택`);
    }
  }, [selectedCountry]);
};

export default Chart;
