import { useState, useEffect, useReducer } from "react";
import List from "./List";

const MainContainer = () => {
  const [value, setValue] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [addClass, setAddClass] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [ID, setID] = useState("");
  const getLocalStorage = localStorage.getItem("items");
  const useLocalStorage = getLocalStorage ? JSON.parse(getLocalStorage) : [];

  // Handle alert function
  const handleAlert = (textMessage, textClass) => {
    setIsMessage(true);
    setMessage(textMessage);
    setAddClass(textClass);
  };

  // Item Reducer function
  const itemReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return [
          ...state,
          { id: new Date().getTime().toString(), title: action.payload },
        ];
      case "REMOVE_ITEM":
        handleAlert("item removed", "alert-danger");
        return state.filter((item) => item.id !== action.payload);

      case "EDIT_ITEM":
        const newItems = state.map((item) =>
          item.id === ID
            ? {
                item,
                title: action.payload,
                id: new Date().getTime().toString(),
              }
            : item
        );
        handleAlert("value changed", "alert-success");
        return newItems;

      case "CLEAR_ITEMS":
        handleAlert("Items cleared", "alert-danger");
        return [];

      default:
        throw new Error("No matching action");
    }
  };

  const [items, dispatch] = useReducer(itemReducer, useLocalStorage);

  // Handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEdit) {
      if (value) {
        dispatch({ type: "ADD_ITEM", payload: value });
        handleAlert("Item added to the list", "alert-success");
      } else {
        handleAlert("please enter value", "alert-danger");
      }
    } else if (isEdit) {
      dispatch({ type: "EDIT_ITEM", payload: value });
      setIsEdit(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    setValue("");
  }, [items]);

  useEffect(() => {
    if (isMessage) {
      const timeOut = setTimeout(() => {
        setIsMessage(false);
        setAddClass("");
      }, 2000);
      return () => clearTimeout(timeOut);
    }
  }, [isMessage]);

  return (
    <main className="main-container">
      <section className="container">
        {isMessage && <p className={`alert ${addClass}`}>{message}</p>}
        <h3 className="heading">Grocery Bud</h3>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="e.g. eggs"
            className="text-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="submit">
            {!isEdit ? "Submit" : "Edit"}
          </button>
        </form>
        <div className="list-container">
          <List
            dispatch={dispatch}
            items={items}
            setIsEdit={setIsEdit}
            setValue={setValue}
            setID={setID}
          />
          {items.length > 0 && (
            <button
              className="clear-btn"
              onClick={() => dispatch({ type: "CLEAR_ITEMS" })}
            >
              Clear items
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default MainContainer;
