import './App.css';
import PlayerItem from './components/PlayerItem';
import TopHeader from './components/TopHeader';
import React from 'react';
import { store } from './store/store';
import { useSelector } from 'react-redux';
import {
  selectPlayers,
  sort
} from './store/initiationSlice';

function PlayerList() {
  return useSelector(selectPlayers).map((player) =>
    <PlayerItem key={player.GetName()} player={player}></PlayerItem>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort() {
    store.dispatch(sort());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopHeader></TopHeader>

          <div className="main-wrapper">
            <h2>Welcome to RPG Initiation</h2>

            <div className="mid-range-container">
              <button className="btn btn-primary submitadjust" onClick={this.handleSort}>Sort</button>
            </div>

            <ul className="list-group">
              <PlayerList />
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
