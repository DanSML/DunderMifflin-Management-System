import React from "react";
import { Switch } from "react-router-dom";
import { Deposit } from "../components/Deposit";
import { InitialPage } from "../components/InitialPage";
import { Management } from "../components/Management";
import { Sales } from "../components/Sales";
import { useUsers } from "../hooks/useUsers";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const Routes: React.FC = () => (
  <Switch>
      <PublicRoute 
        path="/home"
        exact
        component={InitialPage}
      />
  </Switch>
)

function Routeri() {
  const { depositAuthResponse, salesAuthResponse, managementAuthResponse } = useUsers();
  
  return (
    <Switch>
      <PrivateRoute 
        path="/deposit" 
        component={Deposit}
        userState={depositAuthResponse}
        exact 
      />

      <PrivateRoute 
        path="/sales" 
        component={Sales}
        userState={salesAuthResponse}
        exact 
      />

      <PrivateRoute 
        path="/management" 
        component={Management}
        userState={managementAuthResponse}
        exact 
      />
    </Switch>
  );
};

export { Routeri };

