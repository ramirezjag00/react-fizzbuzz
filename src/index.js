import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class FizzBuzz extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      fizzBuzz: "",
      color: "black"
    };
  }

  render() {
    const colorStyle = {
      color: this.state.color
    };
    return (
      <div>
        <h1 className="size" style={colorStyle}>
          {this.state.fizzBuzz || this.state.count}
        </h1>
        <div className="btn-container">
          <button onClick={this._decrement.bind(this)} className="btn">
            -
          </button>
          <button onClick={this._increment.bind(this)} className="btn">
            +
          </button>
        </div>
      </div>
    );
  }

  _fizzBuzz(num) {
    if (num % 15 === 0) {
      this.setState({ fizzBuzz: "FizzBuzz", color: "red" });
    } else if (num % 5 === 0) {
      this.setState({ fizzBuzz: "Buzz", color: "blue" });
    } else if (num % 3 === 0) {
      this.setState({ fizzBuzz: "Fizz", color: "purple" });
    } else {
      this.setState({ fizzBuzz: "", color: "black" });
    }
  }

  _decrement() {
    if (this.state.count > 1) {
      this.setState({ count: --this.state.count });
      this._fizzBuzz(this.state.count);
    }
  }

  _increment() {
    if (this.state.count < 50) {
      this.setState({ count: ++this.state.count });
      this._fizzBuzz(this.state.count);
    }
  }
}

ReactDOM.render(<FizzBuzz />, document.getElementById("root"));
