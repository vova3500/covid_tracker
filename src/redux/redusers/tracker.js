const setData = "SET_DATA";
const setCountries = "SET_COUNTRIES";
const setCountry = "SET_COUNTRY";

const initialState = {
  data: {},
  countries: null,
  country: "",
};

const tracker = (state = initialState, action) => {
  switch (action.type) {
    case setData: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case setCountries: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case setCountry: {
      return {
        ...state,
        country: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default tracker;
