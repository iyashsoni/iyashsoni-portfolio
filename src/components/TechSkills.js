import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Text } from "grommet";

export default class TechSkills extends Component {
  render() {
    return (
      <React.Fragment>
        <Col xs={12} lg={3}>
          <Row end="lg" center="xs">
            <Text
              style={{ width: "100%" }}
              className="bold-text heading"
              size="xxlarge"
            >
              Tech skills
            </Text>
          </Row>
        </Col>
        <Col xs={12} lg={9}>
          <Row start="lg" style={{ alignItems: "center" }}>
            <Text className="bold-text" size="xlarge">
              Frameworks:{" "}
            </Text>
            <Text size="large">Android, Nodejs, Reactjs</Text>
          </Row>
          <Row start="lg" style={{ alignItems: "center" }}>
            <Text className="bold-text" size="xlarge">
              Languages:{" "}
            </Text>
            <Text size="large">JavaScript, Java, Kotlin</Text>
          </Row>
          <Row start="lg" style={{ alignItems: "center" }}>
            <Text className="bold-text" size="xlarge">
              Version Control:{" "}
            </Text>
            <Text size="large">Git</Text>
          </Row>
        </Col>
      </React.Fragment>
    );
  }
}
