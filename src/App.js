import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Dashboard></Dashboard>
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// <div className={darkMode ? "dark-mode" : "light-mode"}>
// <div className="toggle-container">
//   <button
//     onClick={() => {
//       setDarkMode((prevMode) => !prevMode);
//     }}
//   >
//     Toggle Mode
//   </button>
// </div>
// </div>
