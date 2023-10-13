import React, { useState } from "react";
import { Grow } from "@mui/material";
import { Backdrop } from "@mui/material";

function TariffCard(props) {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const { data, dispatch } = props;
  const [open, setOpen] = useState(false);
  async function sendNumber(e) {
    e.preventDefault();
    const response = await fetch("/api/get_cost/" + number);
    const json = await response.json();
    if (response.ok) {
      setMessage(json);
      setOpen(true);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  const src = "./images/" + data.price + ".svg";
  return (
    <section >
      <Grow in={true}>
        <div className="card">
          <div className="rectangle">
            <img className="cardImg" src={src} />
            <h2 className="cardHeader">{data.name}</h2>
            <p className="cardParagraph">{data.description}</p>
            <h4 className="cardPrice">{data.price}</h4>
            <form onSubmit={sendNumber}>
              <input
                className="tariffInput"
                type="number"
                placeholder="Кол-Чел"
                min="1"
                onChange={(event) => {
                  setNumber(event.target.value);
                }}
              />
              <button className="cardButton">Купить</button>
            </form>
          </div>
        </div>
      </Grow>

      <Backdrop
        sx={{
          color: "#fff",
          display: "flex",
          alignItems: "center",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={handleClose}
      >
        <Grow in={open}>
          <div className="totalPrice">
            <div>
              <h2>Oбщая стоимость</h2>
              <h4>{message.total_cost}</h4>
              <button
                className="cardButton"
                style={{ backgroundColor: "blueviolet" }}
              >
                Оплатить
              </button>
            </div>
          </div>
        </Grow>
      </Backdrop>
    </section>
  );
}

export default TariffCard;
