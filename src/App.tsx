import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Events from './pages/Events';
import Contacts from './pages/Contacts';
import AboutUs from './pages/AboutUs';
import StepByStep from './components/StepByStep';

function App() {
  return (
    <Router>
      <StepByStep />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/events">
            <Events />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="/aboutus">
            <AboutUs />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
