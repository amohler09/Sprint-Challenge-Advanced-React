import React from 'react';
import axios from 'axios';
import {NavBar} from './NavBar'

import {PlayerCard} from './PlayerCard'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(response => {
      this.setState({ 
        players: response.data
      })
      console.log(response.data)
    })
    .catch(error => console.log('error', error))
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <PlayerCard players={this.state.players} />
      </div>
    )
  }
}

export default App;
