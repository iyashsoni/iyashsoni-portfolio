import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Text, Anchor } from "grommet";
import { Twitter, Github, Linkedin, StackOverflow, Mail } from "grommet-icons";
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Col xs={12} md={4}>
          <Row end="md" center="xs">
            <Text
              style={{ width: "100%" }}
              className="bold-text heading"
              size="xxlarge"
            >
              Reach @
            </Text>
          </Row>
        </Col>
        <Col xs={12} md={8}>
          <Row start="md" center="xs">
            <Anchor
              color="#0099ff"
              icon={<Twitter style={{ margin: "1rem" }} size="large" />}
              target="_blank"
              style={{ padding: "unset" }}
              href="https://twitter.com/iYash_Soni"
            />
            <Anchor
              icon={
                <Github style={{ margin: "1rem" }} color="plain" size="large" />
              }
              href="https://github.com/iyashsoni/"
              target="_blank"
              style={{ padding: "unset" }}
            />
            <Anchor
              icon={
                <Linkedin
                  style={{ margin: "1rem" }}
                  color="plain"
                  size="large"
                />
              }
              href="https://www.linkedin.com/in/yash-soni-63845aa8/"
              target="_blank"
              style={{ padding: "unset" }}
            />
            <Anchor
              icon={
                <StackOverflow
                  style={{ margin: "1rem" }}
                  color="plain"
                  size="large"
                />
              }
              href="https://stackoverflow.com/users/3320207/yash-soni"
              target="_blank"
              style={{ padding: "unset" }}
            />
            <Anchor
              icon={
                <img
                  src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                  alt="Yash Soni's DEV Profile"
                  height="48"
                  width="48"
                  style={{ margin: "1rem" }}
                />
              }
              color="white"
              href="https://dev.to/iyashsoni"
              target="_blank"
              style={{ padding: "unset" }}
            />
            <Anchor
              icon={
                <Mail style={{ margin: "1rem" }} color="plain" size="large" />
              }
              href="mailto: ysoni96@gmail.com"
              target="_blank"
              style={{ padding: "unset" }}
            />
          </Row>
        </Col>
      </React.Fragment>
    );
  }
}
