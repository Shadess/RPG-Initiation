/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import Player from '../models/Player';

const initialState = {
  players: [],
};

export const initiationSlice = createSlice({
  name: 'initiation',
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      const newPlayer = action.payload;
      if (
        newPlayer instanceof Player &&
        !state.players.some((x) => x.Equals(newPlayer))
      )
        state.players.push(newPlayer);
    },
    clearPlayers: (state) => {
      state.players = [];
    },
    removePlayer: (state, action) => {
      state.players = state.players.filter((x) => !x.Equals(action.payload));
    },
    sort: (state) => {
      state.players.sort((a, b) =>
        a.GetInitiation() === b.GetInitiation()
          ? 0
          : b.GetInitiation() - a.GetInitiation(),
      );
    },
  },
});

export const { addPlayer, clearPlayers, removePlayer, sort } =
  initiationSlice.actions;

export const selectPlayers = (state) => state.initiation.players;

export default initiationSlice.reducer;
