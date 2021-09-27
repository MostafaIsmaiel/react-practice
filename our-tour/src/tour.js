import { useState } from "react";

const Tour = ({ tours, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <main>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        {tours.map((tour) => {
          const { id, image, info, name, price } = tour;
          return (
            <article className="single-tour" key={id}>
              <img src={image} alt={name} />
              <footer>
                <div className="tour-info">
                  <h4>{name}</h4>
                  <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                  {readMore ? info : `${info.substring(0, 200)}...`}
                  <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? "read less" : "read more"}
                  </button>
                </p>
                <button
                  className="delete-btn"
                  onClick={() => {
                    removeTour(id);
                  }}
                >
                  not interested
                </button>
              </footer>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Tour;
