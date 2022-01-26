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
    <div>
      <input
        type="number"
        name="numberTrivia"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      {number === "" ? (
        <p>Invalid data, please enter a number!</p>
      ) : state.loading ? (
        <p>loading...</p>
      ) : (
        <p>{state.data}</p>
      )}
    </div>
  );
};

export default App;
