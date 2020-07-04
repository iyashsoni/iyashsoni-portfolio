import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Text, Anchor } from "grommet";

export default class CompanyInfo extends Component {
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
              Works for
            </Text>
          </Row>
        </Col>
        <Col xs={12} md={8}>
          <Row start="md" center="xs">
            <Text className="bold-text" size="xxlarge">
              IBM India Software Labs
            </Text>
          </Row>
          <Row start="md" center="xs">
            <Text className="light-text" size="medium">
              January 2018 - Present
            </Text>
          </Row>
          <Row start="md" center="xs">
            <Text className="medium-text" size="medium">
              I work as a Senior Software Engineer developing and enhancing
              Mobile Services Platform called{" "}
              <Anchor
                label="MobileFoundation"
                color="black"
                href="https://mobilefirstplatform.ibmcloud.com/"
                target="_blank"
              />
              . It is a simple, scalable, time-tested enterprise mobile
              middleware.
            </Text>
          </Row>
          <Row start="md" center="xs">
            <Text className="medium-text" size="medium">
              I have worked on variety of technologies and products - Mobile
              SDKs (android, react-native), Web SDKs (nodejs), Front End
              (reactjs), Backend (java).
            </Text>
          </Row>
        </Col>
      </React.Fragment>
    );
  }
}
