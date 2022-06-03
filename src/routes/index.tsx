import { BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../pages/home";
import Route from "./routes";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}
