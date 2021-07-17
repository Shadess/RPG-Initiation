import './App.css';
import React from 'react';
import FirebaseLogin from './components/FirebaseLogin';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FirebaseLogin></FirebaseLogin>
        </header>
      </div>
    );
  }
}

export default App;
