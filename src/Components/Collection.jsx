import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMovie from "./CardMovie";
import { useSelector } from "react-redux";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "30px 0",
  },
  movieContainer: {
    padding: "30px 10px",
    gridGap: 20,
    width: "100%",
    border: "none",
    outline: "none",
    margin: "auto",
  },
  notFound: {
    margin: "auto",
  },
}));

const ContainerCollection = styled.div`
  display: ${({ movies }) => (movies > 3 ? "grid" : "flex")};
  grid-template-columns: repeat(4, auto);
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, auto);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, auto);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: auto;
  }
`;

function Collection() {
  const classes = useStyles();
  const { movies } = useSelector((state) => state.moviesReducer);

  return (
    <ContainerCollection
      movies={movies.length}
      className={classes.movieContainer}
    >
      {!movies.length ? (
        <h2 className={classes.notFound}>Not found the movies.</h2>
      ) : (
        movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
      )}
    </ContainerCollection>
  );
}

export default Collection;
