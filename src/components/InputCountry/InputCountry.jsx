import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadingCountries, setCountry } from "../../redux/actions/tracker";

import { NativeSelect, FormControl } from "@material-ui/core";

import "./inputCountry.css";

const InputCountry = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadingCountries());
  }, []);

  const countries = useSelector(({ tracker }) => tracker.countries);

  const handleCountry = (country) => {
    dispatch(setCountry(country));
  };

  return (
    <div className="inputCountry">
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountry(e.target.value)}
        >
          <option value="">Global</option>
          {countries &&
            countries.map((country, i) => (
              <option key={i + country} value={country}>
                {country}
              </option>
            ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default InputCountry;
