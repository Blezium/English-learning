import Navigation from "./Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Vocabulary from "./Vocabulary";
import TestLinks from "./TestLinks";
import Test from "./Test";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/vocabulary">
              <Vocabulary />
            </Route>
            <Route exact path="/tests">
              <TestLinks />
            </Route>
            <Route path="/tests/:test">
              <Test />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
