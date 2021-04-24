import React, { Component } from 'react';

import {Route , Switch} from "react-router-dom";

import Home from './home';

import NavBar from './app/navbar';
import Footer from './app/navbar';
import Countries from './covidcountries/Countries';
import Country from './covidcountries/CountryDetails';
import About from './about'
import Ad from './ads/ad'


class App extends Component {
    state = {  }

    
    render() { 
        return ( 
            <React.Fragment>
            <NavBar/>
            <Ad/>
            <mian>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path='/Country/:id/:u/:name' component={Country}/>
                <Route path="/Countries" component={Countries}/>
                <Route path="/" component={Home}/>
            </Switch>
            </mian>
            <Ad/>
            <Footer/>
        </React.Fragment>
         );
    }
}
 
export default App;