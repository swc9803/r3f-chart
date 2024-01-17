import { useEffect } from 'react';
import useFetch from '../hooks/useFetch.jsx';

const MyElement3D = () => {
  const apiKey = import.meta.env.VITE_POPULATION_API_KEY;

  const data = useFetch(
    `http://apis.data.go.kr/1262000/CountryPopulationService2/getCountryPopulationList2?serviceKey=${apiKey}&cond[country_nm::EQ]=영국`,
  );

  const latestData = data ? data.data[0] : '';

  return (
    <>
      {!latestData ? (
        <>
          <p>loading</p>
        </>
      ) : (
        <>
          <p>Selected Country: {latestData.country_nm}</p>
          <h2>Data:</h2>
          <ul>
            <li>
              <p>Data: {latestData.popltn_cnt_src}</p>
              <p>Population: {latestData.popltn_cnt}</p>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default MyElement3D;
