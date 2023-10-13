import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Slide from "@mui/material/Slide";


function Navbar() {
  const [openBackDrop, SetOpenBackDrop] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <div className="desktopNavbar">
          <Link to="/">Описание игры</Link>
          <Link>Уровни</Link>
          <Link to="/tariffs">Тарифы</Link>
          <Link to="/">Отзывы</Link>
          <Link to="/">Партнеры</Link>
          <Link to="/">Профиль</Link>
          <Link to="/">Игра</Link>
        </div>
        <div className="burger">
          <span onClick={() => SetOpenBackDrop(true)}>
            <MenuRoundedIcon
              sx={{ fontSize: 30, marginLeft: "36px", marginTop: "20px" }}
            />
          </span>

          <Backdrop
            sx={{
              display: "flex",
              justifyContent: "left",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={openBackDrop}
          >
            <Slide direction="right" in={openBackDrop}>
              <div className="mobileNavbar">
                <span onClick={() => SetOpenBackDrop(false)}>
                  <CloseRoundedIcon
                    sx={{
                      fontSize: 30,
                      color: "black",
                      marginLeft: "36px",
                      marginTop: "20px",
                    }}
                  />
                </span>
                <Link to="/">Описание игры</Link>
                <Link>Уровни</Link>
                <Link to="/tariffs">Тарифы</Link>
                <Link to="/">Отзывы</Link>
                <Link to="/">Партнеры</Link>
                <Link to="/">Профиль</Link>
                <Link to="/">Игра</Link>
              </div>
            </Slide>
          </Backdrop>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
