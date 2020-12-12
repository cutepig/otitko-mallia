import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SlideshowScreen } from "app/ui/slideshowScreen/SlideshowScreen";
import { SearchScreen } from "app/ui/searchScreen/SearchScreen";
import { SettingsScreen } from "app/ui/settingsScreen/SettingsScreen";

const Navigation: React.FC = () => (
  <nav className="NavList">
    <ul>
      <li>
        <Link to="/search" title="Search">
          🔎
        </Link>
      </li>
      <li>
        <Link to="/" title="Home">
          🏚
        </Link>
      </li>
      <li>
        <Link to="/settings" title="Settings">
          ⚙️
        </Link>
      </li>
    </ul>
  </nav>
);

const App: React.FC = () => (
  <div className="App">
    <h1>Otitko mallia?</h1>
    <Router>
      <Navigation />

      <Switch>
        <Route path="/" exact component={SlideshowScreen} />
        <Route path="/search" exact component={SearchScreen} />
        <Route path="/settings" exact component={SettingsScreen} />
        <Route path="*">
          <h2>Not found! Sorry 🤷‍♂️</h2>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
