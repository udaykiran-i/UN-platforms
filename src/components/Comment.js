import React from "react";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Template.css";

function Comment(props) {
  const state = { commented: false };
  // this.state={
  //   noOfComments : 0
  // }
  function clicked() {
    // this.setState({noOfComments: this.state.noOfComments + 1})
    props.cmtclick();
  }

  return (
    <div className="container">
      <center>
        <div
          className="container"
          style={{ margin: "10px 10px 10px 0px", width: "25%" }}
        >
          <div className="options">
            {/* <p>0</p> */}
            <pre> </pre>
            <p>Comments</p>
            <pre> </pre>
            <p>|</p>
          </div>
          <div onClick={clicked}>
          <span className="options">
            <FontAwesomeIcon  icon={faComment} />
            <pre> </pre>
            <span>Comment</span>
          </span>
          </div>
        </div>
      </center>
    </div>
  );
}
export default Comment;
