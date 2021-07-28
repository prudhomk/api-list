import { Component } from 'react';
import fetchByCharacter from '../../services/villagerApi';
import { Link } from 'react-router-dom';
export default class VillagerDetails extends Component {
  state = {
    being: null
  }

  async componentDidMount() {
    const { match } = this.props;
    const Character = await fetchByCharacter(match.params.id);
    if(Character) {
      this.setState({ Character: Character });
    }
    else {
      console.log('No one here, go home now!');
    }
  }

  render() {
    const { Character } = this.state;

    if(!Character) return null;

    return (
       
        <Characters />
      
    );
  }
}
