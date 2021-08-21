/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import '../styles/TopHeader.css';
import { FunctionComponent, useState, useCallback } from 'react';
import Player from '../models/Player';
import { store } from '../store/store';
import { addPlayer } from '../store/initiationSlice';

import { useFirebase } from './Firebase/context';

export const TopHeader: FunctionComponent = () => {
  const firebase = useFirebase();

  const [charInit, setCharInit] = useState(0);
  const [charName, setCharName] = useState('');

  const handleClear = useCallback(() => {
    setCharInit(0);
    setCharName('');
  }, []);

  const handleInitChange = useCallback((event) => {
    setCharInit(event.target.value);
  }, []);

  const handleLogout = useCallback(() => {
    firebase.auth.signOut();
  }, [firebase.auth]);

  const handleNameChange = useCallback((event) => {
    setCharName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      store.dispatch(addPlayer(new Player(charName, charInit)));
      handleClear();
    },
    [charInit, charName, handleClear],
  );

  return (
    <div className="top-header">
      <form className="row g-5 align-items-center" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="characterNameInput">
            Name
          </label>
          <input
            id="characterNameInput"
            className="form-control"
            type="text"
            placeholder="character name"
            required
            value={charName}
            onChange={handleNameChange}
          />
        </div>

        <div className="col-auto">
          <label className="visually-hidden" htmlFor="characterInitInput">
            Initiation
          </label>
          <input
            id="characterInitInput"
            className="form-control"
            type="number"
            max="1000"
            required
            value={charInit}
            onChange={handleInitChange}
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary submitadjust">
            Add
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-secondary submitadjust"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  );
};

export default TopHeader;
