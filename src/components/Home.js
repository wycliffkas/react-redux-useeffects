import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../store/actions/index";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h3>Count: {this.props.count}</h3>
        </div>
        <div>
          <button onClick={this.props.inc}>+</button>
          <button onClick={() => this.props.addNbr(5)}>Add 5</button>
          <button onClick={this.props.dec}>-</button> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.change.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(action.increment()),
    dec: () => dispatch(action.decrement()),
    addNbr: (x) => dispatch(action.increaseByNumber(x)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
