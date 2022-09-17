import { BrowserRouter as Router, Switch } from "react-router-dom";

import Agenda from "../pages/schedule";
import Financias from "../pages/financias";
import Home from "../pages/home";
import Pacientes from "../pages/pacientes";
import Route from "./routes";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/pacientes" component={Pacientes} />
        <Route path="/financias" component={Financias} />
      </Switch>
    </Router>
  );
}
