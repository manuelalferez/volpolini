import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./Layout";
import Woman from './pages/Woman';
import Man from './pages/Man';

function App() {
  return (
    <HashRouter basename='/'>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/quienes-somos" component={AboutUs} />
          <Route exact path="/mujer" component={Woman}/>
          <Route exact path="/hombre" component={Man}/>
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
