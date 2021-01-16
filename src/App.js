// import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavSideBar />
      <Switch>
        <Route path="/" exact component={} />
        <Route path="/" component={} />
        <Route path="/" component={} />
      </Switch>
    </Router>
  );
}

export default App;
