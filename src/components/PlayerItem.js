import '../styles/PlayerItem.css';
import React from "react";
import { store } from '../store/store';
import { removePlayer } from '../store/initiationSlice';

export default class PlayerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInitInput: false,
            showNameInput: false,
            updateCharInit: 0,
            updateCharName: ''
        };

        this.handleDelete = this.handleDelete.bind(this);

        this.handleInitBlur = this.handleInitBlur.bind(this);
        this.handleInitChange = this.handleInitChange.bind(this);
        this.handleInitKeyPress = this.handleInitKeyPress.bind(this);

        this.handleNameBlur = this.handleNameBlur.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNameKeyPress = this.handleNameKeyPress.bind(this);

        this.handleShowInitInput = this.handleShowInitInput.bind(this);
        this.handleShowNameInput = this.handleShowNameInput.bind(this);
    }

    handleDelete() {
        store.dispatch(removePlayer(this.props.player));
    }

    handleInitBlur() {
        this.updateCharInit();
    }

    handleInitChange(event) {
        this.setState({ updateCharInit: event.target.value });
    }

    handleInitKeyPress(event) {
        if (event.keyCode === 13) {
            this.updateCharInit();
        }
    }

    handleNameBlur() {
        this.updateCharName();
    }

    handleNameChange(event) {
        this.setState({ updateCharName: event.target.value });
    }

    handleNameKeyPress(event) {
        if (event.keyCode === 13) {
            this.updateCharName();
        }
    }

    handleShowInitInput() {
        this.setState({ showInitInput: true, updateCharInit: this.props.player.GetInitiation() });
    }

    handleShowNameInput() {
        this.setState({ showNameInput: true, updateCharName: this.props.player.GetName() });
    }

    updateCharInit() {
        this.props.player.SetInitiation(this.state.updateCharInit);
        this.setState({ showInitInput: false });
    }

    updateCharName() {
        this.props.player.SetName(this.state.updateCharName);
        this.setState({ showNameInput: false });
    }

    render() {
        return (<li className="list-group-item d-flex justify-content-between align-items-center">
            {!this.state.showNameInput ? (
                <span onClick={this.handleShowNameInput}>{this.props.player.GetName()}</span>
            ) : (
                <input type="text" className="form-control charinput" autoFocus
                    value={this.state.updateCharName}
                    onBlur={this.handleNameBlur}
                    onChange={this.handleNameChange}
                    onKeyDown={this.handleNameKeyPress} />
            )}

            {!this.state.showInitInput ? (
                <span className="badge bg-primary rounded-pill" onClick={this.handleShowInitInput}>{this.props.player.GetInitiation()}</span>
            ) : (
                <input type="number" max="1000" className="form-control numinput" autoFocus
                    value={this.state.updateCharInit}
                    onBlur={this.handleInitBlur}
                    onChange={this.handleInitChange}
                    onKeyDown={this.handleInitKeyPress} />
            )}

            <button className="btn btn-danger delbutton"
                onClick={this.handleDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash2" viewBox="0 0 16 16">
                    <path d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z"></path>
                </svg>
            </button>
        </li>);
    }
}