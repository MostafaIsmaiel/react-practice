import { useState } from "react";
import Item from "./item";
import Filters from "./filter";
const Main = () => {
  const [category, setCat] = useState("all");

  const handleFilter = (e) => {
    let targetFilter = e.target.innerText;
    setCat(targetFilter);
  };

  return (
    <main className="container text-center">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <Filters handleFilter={handleFilter} />
      </div>
      <section className="menu">
        <div className="row">
          <Item cate={category.toLowerCase()} />
        </div>
      </section>
    </main>
  );
};

export default Main;
