import locations from "../../json/data";
import { useState } from "react";
import Button from "./Button";

const CascadingList = () => {
  const [{ country, state, city }, setData] = useState({
    country: "",
    state: "",
    city: "",
  });

  const countries = locations.countries.map((country) => (
    <option key={country.name}>{country.name}</option>
  ));

  const states = locations.countries
    .find((item) => item.name === country)
    ?.states.map((state) => <option key={state.name}>{state.name}</option>);

  const cities = locations.countries
    .find((item) => item.name === country)
    ?.states.find((sitem) => sitem.name === state)
    ?.cities.map((city) => <option key={city.name}>{city.name}</option>);

  function handleCountryChange(event:any) {
    setData((data) => ({ state: "", city: "", country: event.target.value }));
  }

  function handleStateChange(event:any) {
    setData((data) => ({ ...data, city: "", state: event.target.value }));
  }

  function handleCityChange(event:any) {
    setData((data) => ({ ...data, city: event.target.value }));
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-4xl text-slate-500 font-mono">Cascading Lists</h1>
      <br></br>
      <form onSubmit={() => console.log("Submitted form")}>
        <div className="flex flex-row justify-center items-center mx-10 my-5 px-10 py-5 space-x-2">
        <div className="px-10 py-3 mb-10 bg-blue-400 rounded-sm border-collapse shadow-sm">
          <select className="bg-blue-400" value={country} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {countries}
          </select>
        </div>
        <div className="mx-5 px-10 py-3 mb-10 bg-blue-400 rounded-sm border-collapse shadow-sm">
          <select className="bg-blue-400" value={state} onChange={handleStateChange}>
            <option value="">Select State</option>
            {states}
          </select>
        </div>
        <div className="mx-5 px-10 py-3 mb-10 bg-blue-400 rounded-sm border-collapse shadow-sm">
          <select value={city} className="bg-blue-400" onChange={handleCityChange}>
            <option value="">Select City</option>
            {cities}
          </select>
        </div>
        </div>
        {/* <button type="submit">Submit</button> */}
      </form>
      <div>
        <Button display_data="back to home page" link="/" />
      </div>
    </div>
  );
};

export default CascadingList;
