import React from "react";

import Dropdown from "./components/Dropdown";

import './App.css';

function App() {
  // dropdown options
  const friendOptions = [
    { key: "1", value: "Joni" },
    { key: "2", value: "Hieu" },
    { key: "3", value: "Vico" },
  ]

  const restaurantOptions = [
    { key: "1", value: "Menza" },
    { key: "2", value: "Bibimbap" },
    { key: "3", value: "Komachi" },
  ]

  return (
      <div className="container">

        <div className="flex justify-center pt-4">Dinner with.. (You can do multiselect)</div>
        <div className="flex justify-center pt-2">
          <Dropdown options={friendOptions} isMulti={true}/>
        </div>

        <div className="flex justify-center pt-4">Dinner at.. (single)</div>
        <div className="flex justify-center pt-2">
          <Dropdown options={restaurantOptions} isMulti={false}/>
        </div>

    </div>
  );
}

export default App;