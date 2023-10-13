import React, { useEffect, useReducer, useState } from "react";
import TariffCard from "../components/TariffCard";
import Navbar from "../components/Navbar";
import Grow from "@mui/material/Grow";

const url = "/api/get_tariff/";
function Tariff() {
  const [tariffData, setTariffData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      if (response.ok) {
        setTariffData(json);
      }
      console.log(tariffData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="tariffPage">
        <Navbar />
        <div className="cardBox">
          {tariffData &&
            tariffData.map((data) => {
              return (
                <TariffCard data={data}/>
                )
            })}
          {console.log(tariffData)}
        </div>
      </div>
      
    </div>
  );
}

export default Tariff;
