import React from 'react';
import axios from 'axios'
import PlayerCard from './components/PlayerCard'
import './App.css';

class App extends React.Component {

  state = {
    player: [],
    playerInput: ''
  }


  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players/`)
      .then(response => {
        this.setState({
          player: response.data
        })
        console.log(response.data)
      })
      .catch(error => console.log('error', error))
  }

  render() {
  return (
    <div className="App">
      <PlayerCard player={this.state.player} />
    </div>
  )};
}

export default App;
