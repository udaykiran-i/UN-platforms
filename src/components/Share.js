import React, { Component } from "react";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Template.css";
toast.configure()

class Share extends Component {
  constructor(){
    super()
    this.state={
      noOfShares : 0
    }
  }
  state = { shared: false };
  toggle = () => {
    this.setState({noOfShares: this.state.noOfShares + 1})
    toast("Shared successfully", {
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.INFO,
        autoClose: 3000,
      });
  };
  
  render() {
    return (
      <div className="container">
        <center>
          <div
            className="container"
            style={{ margin: "10px 0px 10px 10px", width: "25%" }}
          >
          <div className="options">
            <p>{this.state.noOfShares}</p>
            <pre>{" "}</pre>
            <p>Shares</p>
            <pre>{" "}</pre>
            <p>|</p>
          </div>
          <div onClick={() => this.toggle()}>
              <span className="options">
                <FontAwesomeIcon icon={faShare} />
                <pre>{" "}</pre>
                <span>Share</span>
              </span>
          </div>
          </div>
        </center>
      </div>
    );
  }
}

export default Share;
