const INITIAL_STATE = {
  movies: [],
  totalPages: 0,
  movie: null,
  prices: {},
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: payload,
      };
    case "SET_MOVIE":
      return {
        ...state,
        movie: payload,
      };
    case "SET_TOTAL_PAGE":
      return {
        ...state,
        totalPages: payload,
      };
    case "SET_PRICES":
      return {
        ...state,
        prices: payload,
      };
    case "CLEAR_MOVIES":
      return {
        ...state,
        movies: [],
      };
    case "CLEAR_MOVIE":
      return {
        ...state,
        movie: null,
      };
    default:
      return state;
  }
};

export default moviesReducer;
