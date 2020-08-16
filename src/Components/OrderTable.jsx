import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import StyledLink from "../Components/StyledLink";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    borderRadius: "5px 5px 0 0",
    height: 400,
  },
  table: {
    minWidth: 650,
  },
  poster: {
    borderRadius: 5,
  },
});

export default function OrderTable({ carts }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddRemoveDelete = (action, id) => {
    switch (action) {
      case "increase":
        return dispatch({ type: "INCREASE_ITEM", payload: id });
      case "decrease":
        return dispatch({ type: "DECREASE_ITEM", payload: id });
      case "remove":
        return dispatch({ type: "REMOVE_ITEM", payload: id });
      default:
        break;
    }
  };

  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>รูปภาพ</TableCell>
            <TableCell align="right">ชื่อสินค้า</TableCell>
            <TableCell align="right">จำนวน</TableCell>
            <TableCell align="right">ราคา</TableCell>
            <TableCell align="right">ลบ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                <StyledLink to={`/movie/${item.id}`}>
                  <img
                    draggable={false}
                    className={classes.poster}
                    alt={item.title}
                    width="150"
                    height="200"
                    src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
                  />
                </StyledLink>
              </TableCell>
              <TableCell align="right">
                <StyledLink to={`/movie/${item.id}`}>{item.title}</StyledLink>
              </TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => handleAddRemoveDelete("decrease", item.id)}
                >
                  <ArrowLeftIcon />
                </IconButton>
                {item.quantity}
                <IconButton
                  onClick={() => handleAddRemoveDelete("increase", item.id)}
                >
                  <ArrowRightIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">{item.price} บาท</TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => handleAddRemoveDelete("remove", item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
