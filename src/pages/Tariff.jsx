import React, { useEffect, useReducer, useState } from "react";
import TariffCard from "../components/TariffCard";
import Navbar from "../components/Navbar";
import Grow from "@mui/material/Grow";

const url = "/api/get_tariff/";
function Tariff() {
  const [tariffData, setTariffData] = useState([]);
  // const [price, setPrice] = useState({ total_cost: "2" });
  // const [priceMessage, dispatch] = useReducer(reducer, price);
  // function reducer(state, action) {
  //   if (action.type === "SHOW_TARIFF") {
  //     setPrice(action.payload.message);
  //     setOpen(true);
  //   }
  // }

  // function handleClose() {
  //   setOpen(false);
  // }

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
