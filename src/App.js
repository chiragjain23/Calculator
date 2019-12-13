import React from "react";
import "./App.css";

function ViewScreen(props) {
  return <div className="viewScreen">{props.value}</div>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opStr: ""
    };
  }

  generateOpString = value => {
    this.setState(state => {
      return { opStr: state.opStr + value };
    });
  };

  render() {
    return (
      <div className="calculator">
        <ViewScreen value={this.state.opStr} />

        <div className="keys">
          <input
            type="button"
            className="key"
            value="1"
            onClick={() => this.generateOpString(1)}
          />
          <input
            type="button"
            className="key"
            value="2"
            onClick={() => this.generateOpString(2)}
          />
          <input
            type="button"
            className="key"
            value="3"
            onClick={() => this.generateOpString(3)}
          />
        </div>
        <div className="keys">
          <input
            type="button"
            className="key"
            value="4"
            onClick={() => this.generateOpString(4)}
          />
          <input
            type="button"
            className="key"
            value="5"
            onClick={() => this.generateOpString(5)}
          />
          <input
            type="button"
            className="key"
            value="6"
            onClick={() => this.generateOpString(6)}
          />
        </div>
        <div className="keys">
          <input
            type="button"
            className="key"
            value="7"
            onClick={() => this.generateOpString(7)}
          />
          <input
            type="button"
            className="key"
            value="8"
            onClick={() => this.generateOpString(8)}
          />
          <input
            type="button"
            className="key"
            value="9"
            onClick={() => this.generateOpString(9)}
          />
        </div>
        <div className="keys">
          <input
            type="button"
            className="key"
            value="0"
            onClick={() => this.generateOpString(0)}
          />
        </div>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
