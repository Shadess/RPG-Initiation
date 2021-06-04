import { store } from '../store/store';
import {
    addPlayer,
    clearPlayers,
    removePlayer,
    selectPlayers,
    sort
} from '../store/initiationSlice';
import Player from '../models/Player';

let rootState;
const testPlayer = new Player('joe', 2);
const testPlayer2 = new Player('john', 18.3);
const testPlayer3 = new Player('jeff', 12.3);

beforeEach(() => {
    rootState = store.getState();
});

afterEach(() => {
    store.dispatch(clearPlayers());
})

test('initializes store', () => {
    expect(rootState).toBeDefined();
    expect(rootState.initiation).toBeDefined();
});

test('gets list of players initialized to empty', () => {
    expect(selectPlayers(rootState)).toStrictEqual([]);
});

test('adds a player', () => {
    store.dispatch(addPlayer(testPlayer));
    expect(selectPlayers(store.getState())).toStrictEqual([testPlayer]);
});

test('does not add a non player object', () => {
    store.dispatch(addPlayer('hey there'));
    expect(selectPlayers(store.getState())).toStrictEqual([]);
});

test('removes a player from empty', () => {
    store.dispatch(removePlayer(testPlayer));
    expect(selectPlayers(store.getState())).toStrictEqual([]);
});

test('removes an actual player', () => {
    store.dispatch(addPlayer(testPlayer));
    store.dispatch(addPlayer(testPlayer2));
    expect(selectPlayers(store.getState())).toStrictEqual([testPlayer, testPlayer2]);
    store.dispatch(removePlayer(testPlayer));
    expect(selectPlayers(store.getState())).toStrictEqual([testPlayer2]);
});

test('does not remove a player not in the array', () => {
    store.dispatch(addPlayer(testPlayer));
    store.dispatch(addPlayer(testPlayer2));
    expect(selectPlayers(store.getState())).toStrictEqual([testPlayer, testPlayer2]);
    store.dispatch(removePlayer(testPlayer3));
    expect(selectPlayers(store.getState())).toStrictEqual([testPlayer, testPlayer2]);
});

test('doest not remove a non player object', () => {
    store.dispatch(addPlayer(testPlayer));
    store.dispatch(addPlayer(testPlayer2));
    expect(selectPlayers(store.getState())).toStrictEqual([testPlayer, testPlayer2]);
    store.dispatch(removePlayer('testPlayer2'));
    expect(selectPlayers(store.getState())).toStrictEqual([testPlayer, testPlayer2]);
});

test('does not add same player', () => {
    store.dispatch(addPlayer(testPlayer));
    store.dispatch(addPlayer(testPlayer));
    expect(selectPlayers(store.getState())).toStrictEqual([testPlayer]);
});

test('sorts array unsorted', () => {
    store.dispatch(addPlayer(testPlayer));
    store.dispatch(addPlayer(testPlayer2));
    expect(selectPlayers(store.getState())).toStrictEqual([testPlayer, testPlayer2]);
    store.dispatch(sort());
    expect(selectPlayers(store.getState())).toStrictEqual([testPlayer2, testPlayer]);
});

test('sorts array sorted', () => {
    store.dispatch(addPlayer(testPlayer2));
    store.dispatch(addPlayer(testPlayer3));
    expect(selectPlayers(store.getState())).toStrictEqual([testPlayer2, testPlayer3]);
    store.dispatch(sort());
    expect(selectPlayers(store.getState())).toStrictEqual([testPlayer2, testPlayer3]);
});