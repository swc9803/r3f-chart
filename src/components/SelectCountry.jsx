import useFetch from '../hooks/useFetch.jsx';

const SelectCountry = ({ changeCountry }) => {
  const apiKey = import.meta.env.VITE_POPULATION_API_KEY;
  const url = `http://apis.data.go.kr/1262000/CountryPopulationService2/getCountryPopulationList2?serviceKey=${apiKey}&numOfRows=500`;
  const data = useFetch(url);

  const evenIndexData = data ? data.data.filter((_, index) => index % 2 === 0) : [];

  const selectCountry = (country) => {
    changeCountry(country);
  };

  return (
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
              <button onClick={() => selectCountry(item)}>Select</button>
              <br />
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default SelectCountry;
