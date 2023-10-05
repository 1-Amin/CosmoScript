import React from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <a>Описание игры</a>
        <a>Уровни</a>
        <a>Тарифы</a>
        <a>Отзывы</a>
        <a>Партнеры</a>
        <a>Профиль</a>
        <a>Игра</a>
        <div className="burger">
        <MenuRoundedIcon sx={{fontSize: 30}}/>
      </div>
      </div>

     
    </nav>
  );
}

export default Navbar;
