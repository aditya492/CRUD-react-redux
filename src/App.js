import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import AddDocument from "./components/Documents/AddDocument";
import ViewDocument from "./components/Documents/ViewDocument";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {isAuthenticated ? (
            <Redirect to="/dashboard" />
          ) : (
            <Redirect to="/signup" />
          )}
        </Route>
        {!isAuthenticated && (
          <Route path="/signup" exact>
            <SignUp />
          </Route>
        )}
        {!isAuthenticated && (
          <Route path="/login" exact>
            <Login />
          </Route>
        )}
        {isAuthenticated && (
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
        )}
        {isAuthenticated && (
          <Route path="/add" exact>
            <AddDocument />
          </Route>
        )}
        {isAuthenticated && (
          <Route path="/documents/:id">
            <ViewDocument />
          </Route>
        )}
        <Route path="*">
          <p>Page Not Found</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;