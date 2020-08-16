import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  button: {
    listStyle: "none",
    cursor: "pointer",
    padding: "3px 10px",
    fontWeight: 600,
    border: `1px solid #ccc`,
    outline: "none",
    borderRadius: 5,
    margin: "0 1px",
    backgroundColor: "#ccc",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,.8)",
    },
  },
  active: {
    background: "#f50057",
    "&:hover": {
      backgroundColor: "#f50057",
    },
  },
}));

const UlContainer = styled.div`
  display: grid;
  grid-gap: 3px 0px;
  grid-template-columns: repeat(15, auto);

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(8, auto);
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(4, auto);
  }
`;

export default function Pagination({ currentPage, TotalPages, paginate }) {
  const classes = useStyles();
  const [arr, setArr] = React.useState([]);

  React.useEffect(() => {
    if (arr.length) {
      setArr([]);
    }
    for (let i = 0; i < 11; i++) {
      const page = currentPage - 5 > 1 ? currentPage - 5 + i : 1 + i;
      if (TotalPages > 0) {
        if (page <= TotalPages) {
          arr.push(page);
        } else {
          break;
        }
      }
    }
    // } else {
    // for (let i = 0; i < 11; i++) {
    //   const page = currentPage - 5 > 1 ? currentPage - 5 + i : 1 + i;
    //   if (TotalPages > 0) {
    //     if (page <= TotalPages) {
    //       arr[i] = page;
    //     } else {
    //       break;
    //     }
    //   }
    // }
    // }
  }, [currentPage, setArr, arr, TotalPages]);

  if (!arr.length) return null;
  return (
    <nav style={{ margin: "0 auto auto auto" }}>
      <UlContainer>
        {!arr.find((p) => p === 1) && (
          <li className={classes.button} onClick={() => paginate("first")}>
            first
          </li>
        )}

        {currentPage !== 1 && (
          <li className={classes.button} onClick={() => paginate("prev")}>
            prev
          </li>
        )}
        {arr.map((a) => (
          <li
            key={a}
            className={`${classes.button} ${
              a.toString() === currentPage.toString() && classes.active
            }`}
            onClick={() => paginate(a)}
          >
            {a}
          </li>
        ))}

        {currentPage !== TotalPages && (
          <li className={classes.button} onClick={() => paginate("next")}>
            next
          </li>
        )}

        {!arr.find((p) => p === TotalPages) && (
          <li className={classes.button} onClick={() => paginate("last")}>
            last
          </li>
        )}
      </UlContainer>
    </nav>
  );
}
