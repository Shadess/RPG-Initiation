import '../styles/TopHeader.css';
import React from "react";
import Player from '../models/Player';
import { store } from '../store/store';
import {
    addPlayer
} from '../store/initiationSlice';
import { withFirebase } from './Firebase';

class TopPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charInit: 0,
            charName: ''
        }

        this.handleClear = this.handleClear.bind(this);
        this.handleInitChange = this.handleInitChange.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClear() {
        this.setState({ charInit: 0, charName: '' });
    }

    handleInitChange(event) {
        this.setState({ charInit: event.target.value });
    }

    handleLogout() {
        this.props.firebase.auth.signOut();
    }

    handleNameChange(event) {
        this.setState({ charName: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        store.dispatch(addPlayer(new Player(this.state.charName, this.state.charInit)));
        this.handleClear();
    }

    render() {
        return (
            <div className="top-header">
                <form className="row g-5 align-items-center" onSubmit={this.handleSubmit}>
                    <div className="col-auto">
                        <label className="visually-hidden" htmlFor="characterNameInput">Name</label>
                        <input id="characterNameInput" className="form-control" type="text" placeholder="character name" required
                            value={this.state.charName}
                            onChange={this.handleNameChange} />
                    </div>

                    <div className="col-auto">
                        <label className="visually-hidden" htmlFor="characterInitInput">Initiation</label>
                        <input id="characterInitInput" className="form-control" type="number" max="1000" required
                            value={this.state.charInit}
                            onChange={this.handleInitChange} />
                    </div>

                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary submitadjust">Add</button>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-secondary submitadjust" onClick={this.handleClear}>Clear</button>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-warning" onClick={this.handleLogout}>Logout</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withFirebase(TopPlayer);
