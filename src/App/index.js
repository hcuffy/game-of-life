import React, { Component } from 'react';
import './style.css';
import Table from './components/table';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      size: 20
    };

    this.createBoard = this.createBoard.bind(this);
    this.timesFifty = this.timesFifty.bind(this);

  }

createBoard() {
  let board = [];
  for (let i = 0; i < this.state.size; i++) {
    let row = [];
    for (let j = 0; j < this.state.size; j++) {
      let cell = Math.random() >= 0.70 ? 'live-cell' : 'dead-cell';
      row.push(cell);
    }
    board.push(row);
  }
  this.setState({ board });
}


componentWillMount() {
  this.createBoard();
}

timesFifty() {
    let size = this.state.size;
        size = 50;
    this.setState({ size });
    }

  render() {
    return (
      <div className="App">
      <header>
        <h1>Game of Life</h1>
      </header>
        <Table
        board = { this.state.board }
        size = { this.state.size }
        />
        <div className="btnSet">
        <button className="btn btn-primary" onClick={this.timesFifty}> 50 x 50
        </button>

        </div>
      </div>
    );
  }
}

export default App;
