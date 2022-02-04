import React from "react";
import Card from "react-bootstrap/Card";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Template.css";

class CommentBox extends React.Component {
  constructor(props) {
    super();
    this.state = {
      commentedText: [],
    };
  }
  setName = (nameValue) => {
    var CommentedText = [...this.state.commentedText];
    CommentedText.push(nameValue);
    this.setState({ commentedText: CommentedText });
  };
  state = {
    showMessage: false,
  };
  onButtonClickHandler = () => {
    var CommentedText = [...this.state.commentedText];
    CommentedText.push(this.state.currentComment);
    this.setState({ commentedText: CommentedText });
  };

  render() {
    return (
      <div className="cardMargin">
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <Card id="cardEffectComment">
              <div className="options">
                <input
                  type="text"
                  placeholder="Comment Here"
                  className="edges"
                  id="comment1"
                  onChange={(event) => {
                    this.setState({
                      currentComment: event.target.value,
                    });
                  }}  
                />
                <pre>{"  "}</pre>
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  onClick={this.onButtonClickHandler}
                >
                  Post
                </button>
              </div>
                <div>
                  {this.state.commentedText.length > 0 &&
                    this.state.commentedText.map((x) => {
                      return <p>{x}</p>;
                    })}
                </div>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CommentBox;
