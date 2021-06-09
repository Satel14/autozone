import React, { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import {DataProvider} from './components/Context'
import Main from './components/Main'
import Body from './components/Body'
import Footer from './components/Footer'
import Last from './components/Last'
import './index.css'



const App = () =>{
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
          <Main />
          <Body />
        </div>
        <Footer/>
        <Last />
      </DataProvider>
    );
  }

export default App;

