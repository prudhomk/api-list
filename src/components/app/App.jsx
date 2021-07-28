import React, { Component } from 'react';
import VillagerCharacters from '../../containers/VillagerCharacters';
import VillagerDetail from '../../containers/VillagerDetail';
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
            component={VillagerCharacters}
          />

          <Route path="/:_id" exact={true}
            component={VillagerDetail}
          />

        </Switch>
          
    
      </Router>

    );
  }
}

