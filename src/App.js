import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./config/routes";
import "../src/App.css";

function App() {
  return (
    <div className="pageBody">
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouterWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

function RouterWithSubRoutes(route) {
  //console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;
