import { useState, useEffect } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [state, setState] = useState({ data: "", loading: true });

  useEffect(() => {
    setState({ data: "", loading: true });
    fetch(`http://numbersapi.com/${number}/trivia`)
      .then((res) => res.text())
      .then((result) => setState({ data: result, loading: false }));
  }, [number, setState]);

  return (
    <div className="container">
      <div className="content">
        <h2>Trivia Number</h2>
        <input
          type="number"
          name="numberTrivia"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <div className="result">
          {number === "" ? (
            <p>Invalid data, please enter a number!</p>
          ) : state.loading ? (
            <p>loading...</p>
          ) : (
            <p>{state.data}</p>
          )}
        </div>
        <p className="about">
          Trivia number is an app made by me for a learning purpose, it uses api
          from{" "}
          <a href="http://numbersapi.com" rel="noreferrer" target="_blank">
            numbersapi.com.
          </a>{" "}
          Enter a number in the form, and you might find a fun fact about the
          number! But remember! It has to be a round number, so any number other
          than that is invalid!
        </p>
      </div>
    </div>
  );
};

export default App;
