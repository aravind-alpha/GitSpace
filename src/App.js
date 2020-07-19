import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;

/* 
  const [darkMode, setDarkMode] = React.useState(true);
  
  <div className={darkMode ? "dark-mode" : "light-mode"}>
  <div className="toggle-container">
    <button
      onClick={() => {
        setDarkMode((prevMode) => !prevMode);
      }}
    >
      Toggle Mode
    </button>
  </div>
</div>; */
