import { Route, RouteProps } from "react-router-dom";

function PublicRoute( {...rest} : RouteProps ) {
  return (
    <Route
      {...rest}
    />
  );
};

export { PublicRoute }