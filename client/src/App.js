import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import Score from './components/Score';
import Login  from './components/LoginForm';
import Signup from './components/SingupForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Quiz} />
          <Route exact path="/score" component={Score} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          {/* I figured out why the endpoint wasn't working. It's because I put the /score after the NoMatch Route (Order Matters) */}
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

// heroku deployed website: https://nameless-savannah-58599.herokuapp.com/ - currently the build has failed. it needs to back end in this file to build properly

export default App;
