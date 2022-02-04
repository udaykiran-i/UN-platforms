import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Template.css";

class Like extends Component {
  constructor(props){
    super()
    this.state={
      noOfLikes : 0
    }
  }
  state = { liked: false };
  // const [likes, setLikes] = useState(0);
  toggle = () => {
    this.setState({noOfLikes: this.state.noOfLikes + 1})
  };
  render() {
    return (
      <div className="container">
        <center>
          <div
            className="container"
            style={{ margin: "10px 0px 10px 0px", width: "25%" }}    
          >
          <div className="options">
            <p>{this.state.noOfLikes}</p>
            <pre>{" "}</pre>
            <p>Likes</p>
            <pre>{" "}</pre>
            <p>|</p>
          </div>
          <div onClick={() => this.toggle()}>
              <span className="options">
                <FontAwesomeIcon icon={faHeart} />
                <pre>{" "}</pre>
                <span>Like</span>
              </span>
          </div>
          </div>
        </center>
      </div>
    );
  }
}

export default Like;
