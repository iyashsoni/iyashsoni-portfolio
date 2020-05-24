import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Image, Text } from "grommet";
import QuoteCard from "./QuoteCard";

export default class Introduction extends Component {
  render() {
    return (
      <Col xs={12} lg={12}>
        <Row center="xs">
          <Image
            elevation="medium"
            fill="horizontal"
            style={{
              borderRadius: "50%",
              maxWidth: "300px",
            }}
            src={process.env.PUBLIC_URL + "/assets/image-color.jpg"}
          />
        </Row>
        <br />
        <br />
        <Row center="xs" middle="lg">
          <Text className="bold-text" size="xxlarge">
            Hi, I'm <span style={{ color: "#ff6363" }}>Yash.</span>
          </Text>
        </Row>
        <br />
        <Row center="xs">
          <Text size="xlarge">
            software engineer, mentor, blogger, thinker.
          </Text>
        </Row>
        <Row center="xs">
          <QuoteCard />
        </Row>
      </Col>
    );
  }
}
