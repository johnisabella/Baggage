import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';
import MainContainer from './components/structure/MainContainer';
import Home from './components/pages/Home/Home';
import ManageBag from './components/pages/ManageBag/ManageBag';
import EditBag from './components/pages/EditBag/EditBag';
import EditItem from './components/pages/EditItem/EditItem';
import About from './components/pages/About/About';
import './Custom.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/* <Header /> */}
            <MainContainer>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/ManageBag" component={ManageBag} />
                <Route exact path="/EditBag" component={EditBag} />
                <Route exact path="/EditItem" component={EditItem} />
                <Route exact path="/About" component={About} />
              </Switch>
              </MainContainer>
            <Footer />
          </div>
        </Router>
      </div>

    );
  }
}

//JI added routes above on 4/23. Not sure if additional div is needded. Also not sure where routes should be placed relative to other components (header, MainContainer, etc.)

export default App;
