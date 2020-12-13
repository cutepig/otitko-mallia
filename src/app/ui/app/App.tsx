import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Box,
  createMuiTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { SlideshowScreen } from "app/ui/slideshowScreen/SlideshowScreen";
import { SearchScreen } from "app/ui/searchScreen/SearchScreen";
import { SettingsScreen } from "app/ui/settingsScreen/SettingsScreen";

const App: React.FC = () => (
  <ThemeProvider theme={createMuiTheme()}>
    <Router>
      <Box
        className="App"
        display="flex"
        flexDirection="column"
        minHeight="inherit"
      >
        <Box display="flex" flexDirection="column" flexGrow="1" p={3}>
          <Switch>
            <Route path="/" exact component={SlideshowScreen} />
            <Route path="/search" exact component={SearchScreen} />
            <Route path="/settings" exact component={SettingsScreen} />
            <Route path="*">
              <Typography variant="h4">Not found, sorry!</Typography>
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  </ThemeProvider>
);

export default App;
