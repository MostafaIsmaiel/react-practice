const List = ({ items, dispatch, setIsEdit, setValue, setID }) => {
  return (
    <div className="list">
      {items.map((item) => {
        return (
          <article className="item" key={item.id}>
            <p className="title">{item.title}</p>
            <div className="btn-container">
              <div
                className="edit-btn"
                onClick={() => {
                  setIsEdit(true);
                  items.map(
                    (ele) => ele.id === item.id && setValue(item.title)
                  );
                  setID(item.id);
                }}
              >
                <img src="./buttons/edit.svg" alt="edit" title="edit" />
              </div>
              <div className="delete-btn">
                <img
                  src="./buttons/delete.svg"
                  alt="delete"
                  title="delete"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item.id })
                  }
                />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
