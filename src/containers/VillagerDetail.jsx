import React, { Component } from 'react';
import VillagerDetails from '../components/VillagerDetails/VillagerDetails';
import { fetchByCharacter } from '../services/villagerApi';

export default class VillagerDetail extends Component {
    state = {
      character: null,
      loading: true,
    };

    async componentDidMount() {
      console.log(this.props);
      const { match } = this.props;
      
      const character = await fetchByCharacter(match.params._id);
      this.setState({ character, loading: false });
    }

    render() {
      const { character, loading } = this.state;
      console.log(this.props);
      if(loading) return <h1>Loading...</h1>;

      return <VillagerDetails {...character}/>;
    }
}


