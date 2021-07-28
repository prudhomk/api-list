import React, { Component } from 'react';
import VillagerCharacters from '../../containers/VillagerCharacters';
import VillagerDetails from '../../components/VillagerDetails/VillagerDetails';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default class App extends Component {
  
  render() {
    return (
   
      <Router>
         

        <Switch>
          <Route path="/" exact={true}
            render={routerProps => (
              <VillagerCharacters {...routerProps}/>
            )}
          />

          <Route path="/:_id" exact={true}
            render={routerProps => (
              <VillagerDetails {...routerProps}/>
            )}
          />

        </Switch>
          
    
      </Router>

    );
  }
}

