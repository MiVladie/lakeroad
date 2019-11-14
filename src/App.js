import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout.js';
import Wrapper from './hoc/Wrapper/Wrapper.js';
import Navigation from './containers/Navigation/Navigation.js';

import Home from './containers/Home/Home.js';
import Music from './containers/Music/Music.js';
import Social from './containers/Social/Social.js';
import About from './containers/About/About.js';
import Footer from './containers/Footer/Footer.js';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class App extends Component {
  render () {
    return (
      <Layout>

        <Wrapper>

          <Navigation />   

          <Route render = { ( { location } ) => (

            <TransitionGroup>
              <CSSTransition key = { location.key } timeout = { 500 } classNames = 'fade'>

                <Switch location = { location }>

                  <Route path = '/' exact component = { Home } />      
                  <Route path = '/music' exact component = { Music } />
                  <Route path = '/social' exact component = { Social } />
                  <Route path = '/about' exact component = { About } />

                </Switch>

              </CSSTransition>
            </TransitionGroup>

          )} />

        </Wrapper>

        <Footer />
        
      </Layout>
    );
  }
}

export default App;
