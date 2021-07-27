/* eslint-disable class-methods-use-this */
import Player from 'models/Player';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlayers, sort } from '../store/initiationSlice';
import { store } from '../store/store';
import PlayerItem from './PlayerItem';
import TopHeader from './TopHeader';

function PlayerList() {
  return useSelector(selectPlayers).map((player: Player) => (
    <PlayerItem key={player.GetName()} player={player} />
  ));
}

export default class FirebaseLogin extends React.Component {
  handleSort() {
    store.dispatch(sort());
  }

  render() {
    return (
      <>
        <TopHeader />

        <div className="main-wrapper">
          <h2>Welcome to RPG Initiation</h2>

          <div className="mid-range-container">
            <button
              className="btn btn-primary submitadjust"
              onClick={this.handleSort}
              type="button"
            >
              Sort
            </button>
          </div>

          <ul className="list-group">
            <PlayerList />
          </ul>
        </div>
      </>
    );
  }
}
