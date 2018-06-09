import React, {Component} from 'react';
import './style.css';
import Table from './components/table';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  static createBoard(size) {
    const board = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        const cell = Math.random() >= 0.70;
        row.push(cell);
      }
      board.push(row);
    }
    return board;
  }

  constructor(props) {
    super(props);

    this.state = {
      board: App.createBoard(20),
      size: 20,
      timer: null,
      counter: 0,
      hasStarted: false,
      initiated: false,
      speed: 1000
    };

    this.increaseBoardSize = this.increaseBoardSize.bind(this);
  }

  increaseBoardSize() {
    let { size } = this.state;
    size += 50;
    const board = App.createBoard(size);
    this.setState({ size, board });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Game of Life</h1>
        </header>
        <h1>{this.state.counter}</h1>
        <Table
          board={this.state.board}
          size={this.state.size}
        />
        <div className="btnSet">
          <button
            className="btn btn-primary"
            onClick={this.increaseBoardSize}
          >
            Increase by 10
          </button>
        </div>
      </div>
    );
  }
}

export default App;
