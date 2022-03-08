export const updateData = (movies) => {
  return { type: "UPDATE", payload: movies };
};

export const fetchData = (string) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${string}&apikey=5f1e7f43`
    );
    const result = await response.json();
    if (result.Response === "False") {
      return;
    }
    const movies = result.Search;
    dispatch(updateData(movies));
  };
};
