import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    listStyle: "none",
    cursor: "pointer",
    padding: "3px 10px",
    fontWeight: 600,
    border: `1px solid ${theme.colors.design.two}`,
    outline: "none",
    borderRadius: 2,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,.8)",
    },
  },
  active: {
    background: theme.colors.design.three,
    "&:hover": {
      backgroundColor: theme.colors.design.three,
    },
  },
}));

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
        }
      }
    }
  }, [currentPage, arr, setArr, TotalPages]);

  if (!arr.length) return null;
  return (
    <nav style={{ margin: "auto" }}>
      <ul style={{ display: "flex", flexDirection: "row" }}>
        {!arr.find((a) => a === 1) && (
          <li className={classes.button} onClick={() => paginate("first")}>
            {"<<"}
          </li>
        )}

        {currentPage > 1 && (
          <li className={classes.button} onClick={() => paginate("prev")}>
            {"<"}
          </li>
        )}

        {arr.map((a) => (
          <li
            key={a}
            className={`${classes.button} ${
              a.toString() === currentPage && classes.active
            }`}
            onClick={() => paginate(a)}
          >
            {a}
          </li>
        ))}
        {currentPage < TotalPages && (
          <li className={classes.button} onClick={() => paginate("next")}>
            {">"}
          </li>
        )}
        {!arr.find((a) => a === TotalPages) && (
          <li className={classes.button} onClick={() => paginate("last")}>
            {">>"}
          </li>
        )}
      </ul>
    </nav>
  );
}
