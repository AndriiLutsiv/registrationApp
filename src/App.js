import React from "react";
import "./App.css";
import Layout from "./containers/layout/layout";

import Registration from "./components/Registration/Registration";
import ClientList from "./components/clientsList/clientsList";
import AuthorInfo from "./components/authorInfo/authorInfo";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/authorinfo" component={AuthorInfo} />
          <Route path="/" component={ClientList} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
