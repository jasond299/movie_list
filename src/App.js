import Header from "./component/Header";
import Movie from "./component/Movie";

import { useSelector } from "react-redux";

import "./App.css";

function App() {
  const movies = useSelector((state) => state);

  return (
    <div className="App">
      <Header title={"FinProH8"} />
      <div className="text">Show you favourite movies</div>

      <div className="grid">
        {movies?.data.map((entry, id) => (
          <div key={id}>
            <Movie poster={entry.Poster} title={entry.Title} key={id} />
          </div>
        ))}
      </div>

      <br></br>
    </div>
  );
}

export default App;
