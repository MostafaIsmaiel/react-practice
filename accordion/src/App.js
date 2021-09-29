import Question from "./question";
import data from "./data";

function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {data.map((question) => {
              return <Question {...question} key={question.id} />;
            })}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
