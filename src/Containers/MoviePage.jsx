import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieInfo from "../Components/MovieInfo";
import Preview from "../Components/Preview";
import Spinner from "../Components/Spinner";
import { SetMovie } from "../Redux/movies/actions";

export default function MoviePage({ match }) {
  // params
  const { id } = match.params;

  //states
  const [loading, setLoading] = useState(true);

  // states from reducers
  const { movie } = useSelector((state) => state.moviesReducer);
  // use dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      await dispatch(SetMovie(id));
      setLoading(false);
    };
    fetchMovie();
    return () => {
      dispatch({ type: "CLEAR_MOVIE" });
    };
  }, [id, dispatch, setLoading]);

  if (loading) return <Spinner />;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {movie ? (
        <React.Fragment>
          <Preview movie={movie} />
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,0.5)",
              background: "rgba(0,0,0,0.1)",
            }}
          >
            <MovieInfo movie={movie} />{" "}
          </div>
        </React.Fragment>
      ) : (
        <h2 style={{ margin: "100px auto", color: "#E9C46A" }}>
          Not found the movie.
        </h2>
      )}
    </div>
  );
}
