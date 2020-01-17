import React from 'react';
import axios from 'axios'
import PlayerCard from './components/PlayerCard'
import {AddPlayerForm} from './components/AddPlayerForm'
import './App.css';

class App extends React.Component {

  state = {
    player: [],
    nameInput: ''
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

  addItem = e => {
    e.preventDefault();
    const newItem = {
      name: this.state.nameInput,
      country: 'n/a',
      searches: 'n/a',
      id: Date.now()
    };
    this.setState({
      player: [...this.state.player, newItem],
      nameInput: ''
    });
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
  return (
    <div className="App">
        <AddPlayerForm 
        addItem={this.addItem} 
        nameInput={this.state.nameInput}
        handleChanges={this.state.handleChanges}
        />
      <PlayerCard player={this.state.player} />
    </div>
  )};
}

export default App;
