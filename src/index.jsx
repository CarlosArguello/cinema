import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import MainLayout from "./layouts/main.jsx"

import Home from './pages/Home';
import Populares from "./pages/Populares"
import DetailMovie from "./pages/DetailMovie"
import SearchMovie from "./pages/SearchMovie"
import Error404 from "./pages/Errors/404"

import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom"



const ScrollToTop = ()=> {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = ()=>{
    return (
        <BrowserRouter>
            <MainLayout>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/populares" component={Populares} />
                    <Route exact path="/movies/search" component={SearchMovie} />
                    <Route exact path="/movies/:id" component={DetailMovie} />
                    <Route exact path="*" component={Error404} />
                </Switch>
            </MainLayout>
        </BrowserRouter>
    )

}

ReactDOM.render( App(), document.getElementById('root'));
