import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.jsx';

const MyElement3D = () => {
  const data = useFetch(
    'http://apis.data.go.kr/1262000/CountryPopulationService2/getCountryPopulationList2?serviceKey=nXBdWqlW7S6U6xc5I2njmHZHE0y%2B8%2B8hZqY9Po2CEsgdmsqopKxuvyBXx96HBY0skjrIJN7t2%2FZ61%2FDZnxyVyw%3D%3D&pageNo=1&numOfRows=10&cond[country_nm::EQ]=가나&cond[country_iso_alp2::EQ]=GH',
  );

  useEffect(() => {
    if (data === null) {
      return;
    }
  }, [data]);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>Result Code: {data.resultCode}</p>
      <p>Result Message: {data.resultMsg}</p>

      <h2>Data:</h2>
      <ul>
        {data.data.map((country, index) => (
          <li key={index}>
            <p>Country Name: {country.countryName}</p>
            <p>Population: {country.population}</p>
            {/* Add more properties as needed */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MyElement3D;
