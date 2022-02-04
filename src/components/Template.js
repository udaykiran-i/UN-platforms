import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserImage from "./UserImage";
import DataText from "./Data";
import Title from "./Title";
// import Views from "./Views";
import Like from "./Like";
import Comment from "./Comment";
import Share from "./Share";
import CommentBox from "./CommentBox";
import "./Template.css";

const Template = () => {

const [beforecomment,aftercomment]=useState(false);
function commenthandler()
{
  aftercomment(!beforecomment);
}
  return (
    <div className="cardMargin">
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Card id="cardEffect">
              <div className="options">
                <UserImage />
                <Title />
              </div>
              <Container>
                <div>
                  <DataText />
                </div>
                <div className="options">
                  {/* <Views /> */}
                  <Like />
                  <Comment cmtclick={commenthandler}></Comment>
                  <Share />
                </div>
              </Container>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      {beforecomment && <CommentBox></CommentBox>}
    </div>
  );
};

export default Template;
