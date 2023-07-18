import React, { useState } from "react";
import Menu from "../components/Menu/Menu";
import Categories from "../components/Categories/Categories";
import items from "../data";
import logo from "../logo.JPG";
import { CartProvider } from "../components/Cart/CartContext";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <CartProvider>
      <main>
        <section className="menu section">
          <div className="title">
            <img src={logo} alt="logo" className="logo" />
            <h2>Resto App</h2>
            <div className="underline"></div>
          </div>
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
          />
          <Menu items={menuItems} />
        </section>
      </main>
    </CartProvider>
  );
};

export default Dashboard;
