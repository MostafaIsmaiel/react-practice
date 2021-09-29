import menu from "./data";

const Item = ({ cate }) => {
  let result = menu.filter((item) => {
    if (cate === "all") {
      return item;
    } else {
      return item.category === cate;
    }
  });
  return result.map((menuItem) => {
    const { id, title, price, img, desc } = menuItem;
    return (
      <div className="col-lg-6" key={id}>
        <article className="menu-item">
          <img src={img} alt="" />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4>${price}</h4>
            </header>
            <p className="item-text">{desc}</p>
          </div>
        </article>
      </div>
    );
  });
};

export default Item;
