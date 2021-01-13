import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import Score from './components/Score';
import Login  from './components/LoginForm'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Quiz} />
          <Route exact path="/score" component={Score} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
