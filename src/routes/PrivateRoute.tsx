import { Redirect, Route, RouteProps} from "react-router-dom";

interface PrivateRouteProps extends RouteProps{
  userState: boolean,
}

function PrivateRoute( { userState, ...rest}: PrivateRouteProps) {
  return (
    <>
      {userState && <Route {...rest}/>}

      {!userState && <Redirect to="/"/>}
    </>
  );
};

export { PrivateRoute };