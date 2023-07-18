import React from "react";
import IncreaseButton from "../Increase-btn/Increase-btn";
import DecreaseButton from "../Decrease-btn/Decrease-btn";
import "./Menu.module.css";
const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
                <div className="buttons"></div>
              </header>
              <div className="box-btn">
                <IncreaseButton />
                <DecreaseButton />
              </div>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
