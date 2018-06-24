import React, {Component} from 'react';
import './style.css';
import Table from './components/table';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
<<<<<<< HEAD
	constructor(props) {
		super(props);

		this.state = {
			board: [],
			size: 20,
			timer: null,
			counter: 0,
			hasStarted: false,
			initiated: false,
			speed: 1000
		};

		this.createBoard = this.createBoard.bind(this);
		this.timesFifty = this.timesFifty.bind(this);
	}

	createBoard() {
		let board = [];
		for (let i = 0; i < this.state.size; i++) {
			let row = [];
			for (let j = 0; j < this.state.size; j++) {
				let cell = Math.random() >= 0.7;
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
				<h1>{this.state.counter}</h1>
				<Table board={this.state.board} size={this.state.size} />
				<div className="btnSet">
					<button className="btn btn-primary" onClick={this.timesFifty}>
						{' '}
						50 x 50
					</button>
				</div>
			</div>
		);
	}
=======
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
>>>>>>> 61fc038f792e9721b6f31fb48606d0054e6bca9b
}

export default App;
