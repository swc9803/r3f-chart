import useFetch from '../hooks/useFetch.jsx';

const SelectCounty = () => {
  const apiKey = import.meta.env.VITE_POPULATION_API_KEY;

  const url = `http://apis.data.go.kr/1262000/CountryPopulationService2/getCountryPopulationList2?serviceKey=${apiKey}&numOfRows=500`;
  const data = useFetch(url);

  const evenIndexData = data ? data.data.filter((_, index) => index % 2 === 0) : [];

  return (
    <>
      <button onClick={() => changeCountry('가나')}>가나</button>
      <button onClick={() => changeCountry('영국')}>영국</button>
      <button onClick={() => changeCountry('일본')}>일본</button>
      {!evenIndexData.length ? (
        <>
          <p>loading</p>
        </>
      ) : (
        <>
          {evenIndexData.map((item, index) => (
            <div key={index}>
              <ul>
                <li>
                  <p>Selected Country : {item.country_nm}</p>
                  <p>population : {item.popltn_cnt !== null ? item.popltn_cnt : 0}</p>
                  <p>
                    population growth rate :
                    {item.popltn_growth !== null ? item.popltn_growth : 0}
                  </p>
                  <br />
                </li>
              </ul>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SelectCounty;
