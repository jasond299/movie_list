import Header from "./component/Header";
import Movie from "./component/Movie";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://www.omdbapi.com/?s=man&apikey=5f1e7f43"
      );
      const result = await response.json();
      setMovie(result.Search);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header title={"FinProH8"} />
      <div className="text">Show you favourite movies</div>
      {/* <div>{JSON.stringify(movie)}</div> */}
      {/* <Movie poster={user[1].Poster} title={user[1].Title} /> */}

      <div className="grid">
        {movie.map((entry, id) => (
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
