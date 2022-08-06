import { BrowserRouter as Router, Switch } from "react-router-dom";

import Agenda from "../pages/schedule";
import Home from "../pages/home";
import Route from "./routes";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/agenda" component={Agenda} />
      </Switch>
    </Router>
  );
}
