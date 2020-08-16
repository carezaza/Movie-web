import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

export default function Pagination({ currentPage, TotalPages, paginate }) {
  const classes = useStyles();
  const [arr, setArr] = React.useState([]);
  const myPage = currentPage ? currentPage : 1;

  React.useEffect(() => {
    if (arr.length) {
      setArr([]);
    }

    for (let i = 0; i < 11; i++) {
      const page = myPage - 5 > 1 ? myPage - 5 + i : 1 + i;
      if (TotalPages > 0) {
        if (page <= TotalPages) {
          arr.push(page);
        } else {
          break;
        }
      }
    }
  }, [myPage, setArr, arr, TotalPages]);

  if (!arr.length) return null;
  return (
    <nav style={{ margin: "auto" }}>
      <ul style={{ display: "flex", flexDirection: "row" }}>
        {!arr.find((a) => a === 1) && (
          <li className={classes.button} onClick={() => paginate("first")}>
            first
          </li>
        )}

        {myPage > 1 && (
          <li className={classes.button} onClick={() => paginate("prev")}>
            prev
          </li>
        )}

        {arr.map((a) => (
          <li
            key={a}
            className={`${classes.button} ${
              a.toString() === myPage.toString() && classes.active
            }`}
            onClick={() => paginate(a)}
          >
            {a}
          </li>
        ))}
        {myPage < TotalPages && (
          <li className={classes.button} onClick={() => paginate("next")}>
            next
          </li>
        )}
        {!arr.find((a) => a === TotalPages) && (
          <li className={classes.button} onClick={() => paginate("last")}>
            last
          </li>
        )}
      </ul>
    </nav>
  );
}
