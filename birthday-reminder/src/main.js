import { people } from "./people";
import { useState } from "react";

const Main = () => {
  const [persons, setPersons] = useState(people);

  const removeAll = () => {
    setPersons([]);
  };

  const removePerson = (id) => {
    let newPersons = persons.filter((person) => person.id !== id);
    setPersons(newPersons);
  };

  return (
    <main className="main">
      <section className="container">
        <h3>{persons.length} birthdays today</h3>
        {persons.map((person) => {
          const { id, name, age, img } = person;
          return (
            <article className="person" key={id}>
              <img src={img} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <button className="remove" onClick={() => removePerson(id)}>
                Remove
              </button>
            </article>
          );
        })}

        <button className="remove-all" onClick={removeAll}>
          Clear all
        </button>
      </section>
    </main>
  );
};

export default Main;
