import React, { useState } from 'react';
import useFetch from '../hooks/useFetch.jsx';

const SelectCounty = () => {
  const apiKey = import.meta.env.VITE_POPULATION_API_KEY;

  const [selectedCountry, setSelectedCountry] = useState('가나');
  const url = `http://apis.data.go.kr/1262000/CountryPopulationService2/getCountryPopulationList2?serviceKey=${apiKey}&cond[country_nm::EQ]=${selectedCountry}`;

  const data = useFetch(url);
  const latestData = data ? data.data[0] : '';

  const changeCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      {!latestData ? (
        <>
          <p>loading</p>
        </>
      ) : (
        <>
          <p>Selected Country: {latestData.country_nm}</p>
          <button onClick={() => changeCountry('가나')}>가나</button>
          <button onClick={() => changeCountry('영국')}>영국</button>
          <button onClick={() => changeCountry('일본')}>일본</button>
          <ul>
            <li>
              <p>인구수: {latestData.popltn_cnt}</p>
              <p>증감률: {latestData.popltn_growth}</p>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default SelectCounty;
