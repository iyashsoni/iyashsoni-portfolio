import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Text } from "grommet";

export default class TechSkills extends Component {
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
              Tech skills
            </Text>
          </Row>
        </Col>
        <Col xs={12} md={8}>
          <Row start="md" center="xs" style={{ alignItems: "center" }}>
            <Text className="bold-text" size="xlarge">
              Frameworks:{" "}
            </Text>
            <Text size="large">Android, Nodejs, Reactjs</Text>
          </Row>
          <Row start="md" center="xs" style={{ alignItems: "center" }}>
            <Text className="bold-text" size="xlarge">
              Languages:{" "}
            </Text>
            <Text size="large">JavaScript, Java, Kotlin</Text>
          </Row>
          <Row start="md" center="xs" style={{ alignItems: "center" }}>
            <Text className="bold-text" size="xlarge">
              Databases:{" "}
            </Text>
            <Text size="large">mongo, MySQL, PostgreSQL</Text>
          </Row>
          <Row start="md" center="xs" style={{ alignItems: "center" }}>
            <Text className="bold-text" size="xlarge">
              Cloud Services:{" "}
            </Text>
            <Text size="large">Google Firebase, IBM Cloud</Text>
          </Row>
        </Col>
      </React.Fragment>
    );
  }
}
