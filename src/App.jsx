import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadingData } from "./redux/actions/tracker";

import InputCountry from "./components/InputCountry/InputCountry";
import Cards from "./components/Cards/Cards";
import Graph from "./components/Graph/Graph";

import "./App.css";

function App() {
  let dispatch = useDispatch();

  const data = useSelector(({ tracker }) => tracker.data);
  const country = useSelector(({ tracker }) => tracker.country);

  React.useEffect(() => {
    dispatch(loadingData(country));
  }, [country]);

  return (
    <div className="App">
      <img
        src="https://github.com/adrianhajdin/project_corona_tracker/blob/master/src/images/image.png?raw=true"
        alt="COVID-19"
      />
      <Cards data={data} />
      <InputCountry />
      <Graph data={data} country={country} />
    </div>
  );
}

export default App;
