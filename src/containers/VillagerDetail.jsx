import React, { Component } from 'react';
import VillagerDetails from '../components/VillagerDetails/VillagerDetails';
import { fetchByCharacter } from '../services/villagerApi';

export default class VillagerDetail extends Component {
    state = {
      character: null,
      loading: true,
    };

    async componentDidMount() {
      const character = await fetchByCharacter(this.props.match.params._id);
      this.setState({ character, loading: false });
    }

    render() {
      const { character, loading } = this.state;

      if(loading) return <h1>Loading...</h1>;

      return <VillagerDetails {...character}/>;
    }
}


