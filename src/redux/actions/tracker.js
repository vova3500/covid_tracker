import { fetchData, fetchCountries } from "../../api";

export const setData = (country) => ({
  type: "SET_DATA",
  payload: country,
});
export const setCountries = (countries) => ({
  type: "SET_COUNTRIES",
  payload: countries,
});
export const setCountry = (country) => ({
  type: "SET_COUNTRY",
  payload: country,
});

export const loadingData = (country) => async (dispatch) => {
  let resposne = await fetchData(country);
  dispatch(setData(resposne));
};
export const loadingCountries = () => async (dispatch) => {
  let resposne = await fetchCountries();
  dispatch(setCountries(resposne));
};
