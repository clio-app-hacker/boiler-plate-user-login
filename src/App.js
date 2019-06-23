import React from "react";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import { Router } from "@reach/router";
import config from "./aws-exports";

Amplify.configure(config);

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Router>
        <Home path="/" />
        <Dashboard path="dashboard" />
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);


export default withAuthenticator(App, true);
