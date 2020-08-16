import React from "react";
import MovieInfo from "./MovieInfo";
import Preview from "./Preview";
import withSpinner from "./withSpinner";

function MovieShow({ movie }) {
  return (
    <div>
      {movie ? (
        <React.Fragment>
          <Preview movie={movie} />
          <div>
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

export default withSpinner(MovieShow);
