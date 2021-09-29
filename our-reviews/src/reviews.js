import reviews from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviw = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const nextReview = () => {
    if (index >= reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prevReview = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(reviews.length - 1);
    }
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      if (randomNumber === reviews.length - 1) {
        randomNumber = index - 1;
      } else {
        randomNumber = index + 1;
      }
    }
    setIndex(randomNumber);
  };

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline" />
        </div>
        <article className="review">
          <div className="img-container" key={id}>
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prevReview}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextReview}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomReview}>
            surprise me
          </button>
        </article>
      </section>
    </main>
  );
};

export default Reviw;
