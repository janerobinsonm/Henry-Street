// import './App.css';
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavSideBar />
        <Layout>
          <Router>
            <Switch>
              <Route path="/" exact component={} />
              <Route path="/" component={} />
              <Route path="/" component={} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
