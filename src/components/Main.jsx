import React from "react";

function Main() {
  return (
    <div className="main">
      <h2>ОПИСАНИЕ ИГРЫ</h2>
      <div className="opisanie opisanie1">
        <img src="./images/Op1.png" />
        <div className="opisanieText">
          <h3>Приветствие</h3>
          <p>
            Создадим космический корабль, научимся отправлять и принимать
            сообщения с земли (Ввод/вывод данных).
          </p>
          <button className="opisanieButton opisanieButton1">
            БЕСПЛАТНЫЙ ДОСТУП
          </button>
        </div>
      </div>
      <div className="arrowbox arrowbox1">
        <img src="./images/arrow1.svg" className="arrow arrow1" />
      </div>

      <div className="opisanie opisanie2" >
        <img src="./images/Op2.png" />
        <div className="opisanieText">
          <h3>Запоминаем имена</h3>
          <p>Научимся управлять кораблем и запишем имя капитана корабля</p>
          <button className="opisanieButton opisanieButton1">
            БЕСПЛАТНЫЙ ДОСТУП
          </button>
        </div>
      </div>
      <div className="arrowbox arrowbox2">
        <img src="./images/arrow1.svg" className="arrow arrow2" />
      </div>

      <div className="opisanie opisanie3">
        <img src="./images/Op3.png" />
        <div className="opisanieText">
          <h3>Автопилот</h3>
          <p>Научимся облетать астероиды и другие корабли (Условия).</p>
          <button className="opisanieButton opisanieButton2">
            ДОСТУП ПО ПОДПИСКЕ
          </button>
        </div>
      </div>
      <div className="arrowbox arrowbox3">
        <img src="./images/arrow2.svg" className="arrow arrow3" />
      </div>

      <div className="opisanie opisanie4">
        <img src="./images/Op4.png" />
        <div className="opisanieText">
          <h3>Автопилот +</h3>
          <p>Усовершенствуем наш Автопилот с помощью цикла (Цикл).</p>
          <button className="opisanieButton opisanieButton2">
            ДОСТУП ПО ПОДПИСКЕ
          </button>
        </div>
      </div>
      <div className="arrowbox arrowbox4">
        <img src="./images/arrow2.svg" className="arrow arrow4" />
      </div>

      <div className="opisanie opisanie5">
        <img src="./images/Op5.png" />
        <div className="opisanieText">
          <h3>Функции</h3>
          <p>Подключим новые модули к нашему кораблю (Функции).</p>
          <button className="opisanieButton opisanieButton2">
            ДОСТУП ПО ПОДПИСКЕ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
