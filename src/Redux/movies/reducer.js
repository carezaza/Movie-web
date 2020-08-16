const INITIAL_STATE = {
  movies: [],
  totalPages: 0,
  movie: null,
  prices: {},
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_MOVIES": // payload is array
      return {
        ...state,
        movies: payload,
      };
    case "SET_MOVIE": // payload is object
      return {
        ...state,
        movie: payload,
      };
    case "SET_TOTAL_PAGE": // payload is number
      return {
        ...state,
        totalPages: payload,
      };
    case "SET_PRICES": // payload is number
      return {
        ...state,
        movies: state.movies.map((item) => {
          if (item.id === payload.id) {
            return { ...item, price: payload.price };
          }
          return item;
        }),
        prices: {
          ...state.prices,
          [payload.id]: { id: payload.id, price: payload.price },
        },
      };
    case "CLEAR_MOVIES": // no payload
      return {
        ...state,
        movies: [],
        totalPages: 0,
      };
    case "CLEAR_MOVIE": // no payload
      return {
        ...state,
        movie: null,
      };
    default:
      return state;
  }
};

export default moviesReducer;
