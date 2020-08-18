import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import MainLayout from "./layouts/main.jsx"

import Home from './pages/Home';
import Populares from "./pages/Populares"
import DetailMovie from "./pages/DetailMovie"
import Error404 from "./pages/Errors/404"

import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import { BrowserRouter, Switch, Route, Redirect, useLocation } from "react-router-dom"



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
                    
                    {/* IN GITHUB PAGES */}
                    <Redirect push from="/cinema" to="/" />

                    <Route exact path="/" component={Home} />
                    <Route exact path="/populares" component={Populares} />
                    <Route exact path="/movies/:id" component={DetailMovie} />
                    <Route exact path="*" component={Error404} />
                </Switch>
            </MainLayout>
        </BrowserRouter>
    )

}

ReactDOM.render( App(), document.getElementById('root'));
