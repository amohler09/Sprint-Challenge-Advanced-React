import React from 'react';
import PlayerCard from './PlayerCard'
import axios from 'axios'
import './App.css';

class App extends React.Component {

  state = {
    player: [],
    searchText: ''
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
  
  // handleChanges = e => {
  //   this.setState({
  //     searchText: e.target.value
  //   });
  // }

  // fetchPlayer = e => {
  //   e.preventDefault();
  //   axios
  //     .get(`http://localhost:5000/api/players`)
  //     .then(response => {
  //       console.log(response.data)
  //     })
  // }

  
  render() {
    return (
    <div className="App">
      <PlayerCard player={this.state.player} />
    </div>
  );
  }
}

export default App;
