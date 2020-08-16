export const SearchMovie = (str, page) => async (dispatch) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.REACT_APP_API_KEY
    }&query=${str}&page=${page ? page : 1}`
  );
  const data = await res.json();
  dispatch(SetMovies(data));
};

export const FetchMoviesFromType = (category, page) => async (dispatch) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${
      process.env.REACT_APP_API_KEY
    }&page=${page ? page : 1}`
  );

  const data = await res.json();
  dispatch(SetMovies(data));
};

// fetch movie's detail and set to reducer
export const SetMovie = (id) => async (dispatch, getState) => {
  const MyPrices = getState().moviesReducer.prices;
  try {
    const resD = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const resV = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
    );

    const data = await resD.json();
    const video = await resV.json();
    const videoKey = video.results[0] ? video.results[0].key : "";

    if (MyPrices[data.id]) {
      dispatch({
        type: "SET_MOVIE",
        payload: {
          ...data,
          price: MyPrices[data.id].price,
          video: videoKey,
        },
      });
    } else {
      const price = random(500, 1000);
      MyPrices[data.id] = { id: data.id, price };

      dispatch({
        type: "SET_MOVIE",
        payload: { ...data, price, video: videoKey },
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: "CLEAR_MOVIE",
    });
  }
};

// set many movies to reducer
const SetMovies = (data) => (dispatch, getState) => {
  const { prices } = getState().moviesReducer;

  let movies = [];
  if (data && data.results && data.results.length > 0) {
    movies = data.results.map((m) => {
      if (prices[m.id]) {
        return { ...m, price: prices[m.id].price };
      } else {
        const price = random(500, 1000);
        prices[m.id] = { id: m.id, price };
        return { ...m, price };
      }
    });

    dispatch({ type: "SET_MOVIES", payload: movies });
    dispatch({ type: "SET_TOTAL_PAGE", payload: data.total_pages });
  }
};

// utils function
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
