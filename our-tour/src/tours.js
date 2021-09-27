import { useState, useEffect } from "react";
import Loading from "./loading";
import Tour from "./tour";

const url = "https://course-api.com/react-tours-project";
const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const getTours = async () => {
    setLoading(true);
    const res = await fetch(url);
    const tours = await res.json();
    setTours(tours);
    setLoading(false);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={getTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return <Tour tours={tours} removeTour={removeTour} />;
};

export default Tours;
