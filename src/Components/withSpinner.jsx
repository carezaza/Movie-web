import React from "react";
import Spinner from "./Spinner";

const withSpinner = (Component) => ({ isLoading, ...restProps }) => {
  if (isLoading) return <Spinner />;
  return <Component {...restProps} />;
};

export default withSpinner;
