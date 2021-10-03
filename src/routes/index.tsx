import { Switch, Route } from "react-router-dom";
import { Deposit } from "../components/Deposit";
import { Sales } from "../components/Sales";

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/deposit" exact component={Deposit}/>
    <Route path="/sales" exact component={Sales}/>
    <Route path="/management" exact component={Sales}/>
  </Switch>
)