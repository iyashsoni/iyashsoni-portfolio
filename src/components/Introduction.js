import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Image, Text, Box } from "grommet";
import QuoteCard from "./QuoteCard";
import Typewriter from "typewriter-effect";

export default class Introduction extends Component {
  render() {
    return (
      <Col xs={12} lg={12}>
        <Row center="xs">
          <Box
            pad="medium"
            elevation="medium"
            background="dark"
            gap="medium"
            round="50%"
            style={{ padding: "unset" }}
          >
            <Image
              style={{
                height: "250px",
                width: "250px",
                borderRadius: "50%",
              }}
              src={process.env.PUBLIC_URL + "/assets/image-color.png"}
            />
          </Box>
        </Row>
        <br />
        <br />
        <Row center="xs" middle="lg">
          <Text className="bold-text" size="xxlarge">
            Hi, I'm <span style={{ color: "#0099ff" }}>Yash Soni.</span>
          </Text>
        </Row>
        <br />
        <Row center="xs">
          <Text size="xlarge">
            <Typewriter
              options={{
                strings: ["software engineer", "mentor", "blogger", "thinker"],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
        </Row>
        <Row center="xs">
          <QuoteCard />
        </Row>
      </Col>
    );
  }
}
