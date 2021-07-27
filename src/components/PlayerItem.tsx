import '../styles/PlayerItem.css';
import { FunctionComponent, useCallback, useState } from 'react';
import { store } from '../store/store';
import { removePlayer } from '../store/initiationSlice';
import Player from 'models/Player';

interface IPlayerItemProps {
    player: Player
}

export const PlayerItem: FunctionComponent<IPlayerItemProps> = ({ player }) => {
    const [showInitInput, setInitInput] = useState(false);
    const [showNameInput, setNameInput] = useState(false);
    const [updateCharInit, setCharInit] = useState(0);
    const [updateCharName, setCharName] = useState('');

    const handleDelete = useCallback(() => {
        store.dispatch(removePlayer(player));
    }, []);

    const handleInitBlur = useCallback(() => {
        updateCharInitiation();
    }, []);

    const handleInitChange = useCallback((event) => {
        setCharInit(event.target.value);
    }, []);

    const handleInitKeyPress = useCallback((event) => {
        if (event.keyCode === 13) {
            updateCharInitiation();
        }
    }, []);

    const handleNameBlur = useCallback(() => {
        updateCharacterName();
    }, []);

    const handleNameChange = useCallback((event) => {
        setCharName(event.target.value);
    }, []);

    const handleNameKeyPress = useCallback((event) => {
        if (event.keyCode === 13) {
            updateCharacterName();
        }
    }, []);

    const handleShowInitInput = useCallback(() => {
        setInitInput(true);
        setCharInit(player.GetInitiation());
    }, []);

    const handleShowNameInput = useCallback(() => {
        setNameInput(true);
        setCharName(player.GetName());
    }, []);

    const updateCharInitiation = useCallback(() => {
        player.SetInitiation(updateCharInit);
        setInitInput(false);
    }, []);

    const updateCharacterName = useCallback(() => {
        player.SetName(updateCharName);
        setNameInput(false);
    }, []);

    return (<li className="list-group-item d-flex justify-content-between align-items-center">
        {!showNameInput ? (
            <span onClick={handleShowNameInput}>{player.GetName()}</span>
        ) : (
            <input type="text" className="form-control charinput" autoFocus
                value={updateCharName}
                onBlur={handleNameBlur}
                onChange={handleNameChange}
                onKeyDown={handleNameKeyPress} />
        )}

        {!showInitInput ? (
            <span className="badge bg-primary rounded-pill" onClick={handleShowInitInput}>{player.GetInitiation()}</span>
        ) : (
            <input type="number" max="1000" className="form-control numinput" autoFocus
                value={updateCharInit}
                onBlur={handleInitBlur}
                onChange={handleInitChange}
                onKeyDown={handleInitKeyPress} />
        )}

        <button className="btn btn-danger delbutton"
            onClick={() => handleDelete()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash2" viewBox="0 0 16 16">
                <path d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z"></path>
            </svg>
        </button>
    </li>);
}

export default PlayerItem;
