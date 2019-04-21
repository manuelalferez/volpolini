import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/quienes-somos" component={AboutUs} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
