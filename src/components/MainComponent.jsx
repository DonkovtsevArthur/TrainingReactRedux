import React, { Component } from "react";
import {bindActionCreators } from "redux";
import '../App.css';
import { connect } from "react-redux";

import { changeFirstName, changeSecondName } from "../store/actions";

//component
class MainComponent extends Component {
  render() {
    const {
      firstName,
      secondName,
      changeFirstName,
      changeSecondName
    } = this.props;

    return (
      <div>
        <div>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={event => {
              changeFirstName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={secondName}
            placeholder="Second Name"
            onChange={event => {
              changeSecondName(event.target.value);
            }}
          />
        </div>

        <div className="write">{`${firstName} ${secondName}`}</div>
      </div>
    );
  }
}

//map
const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    secondName: state.secondName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch)
  };
};

//connect
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
