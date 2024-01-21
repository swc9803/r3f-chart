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
    <div className="country-container">
      {evenIndexData.map((item, index) => (
        <div className="country-wrapper" key={index}>
          <ul>
            <li>
              <p>population : {item.popltn_cnt !== null ? item.popltn_cnt : 0}</p>
              <p>
                population growth rate :
                {item.popltn_growth !== null ? item.popltn_growth : 0}
              </p>
              <button onClick={() => selectCountry(item)}>{item.country_eng_nm}</button>
              <br />
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SelectCountry;
