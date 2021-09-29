import menu from "./data";

const Filters = ({ handleFilter }) => {
  let allCate = [
    "all",
    ...new Set(
      menu.map((item) => {
        return item.category;
      })
    ),
  ];
  return allCate.map((cate, index) => {
    return (
      <button className="filter-btn btn" onClick={handleFilter} key={index}>
        {cate}
      </button>
    );
  });
};

export default Filters;
