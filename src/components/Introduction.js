import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Text } from "grommet";
import QuoteCard from "./QuoteCard";
import Typewriter from "typewriter-effect";
import Lottie from 'react-lottie';
import debuggingAnim from '../lotties/debugging-anim.json';
import codingAnim from '../lotties/coding-anim.json';

const debuggingAnimOptions = {
  loop: true,
  autoplay: true,
  animationData: debuggingAnim,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const codingAnimOptions = {
  loop: true,
  autoplay: true,
  animationData: codingAnim,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
export default class Introduction extends Component {
  render() {
    return (
      <Col xs={12} lg={12}>
        <Row center="xs">
          <Lottie
            options={debuggingAnimOptions}
            height={400}
            width={400}
          />
        </Row>
        <br />
        <br />
        <Row center="xs" middle="lg">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Lottie
              options={codingAnimOptions}
              height={100}
              width={100}
            />
            <Text className="bold-text" size="xxlarge">
              Hi, I'm <span style={{ color: "#0099ff" }}>Yash Soni.</span>
            </Text>
          </div>
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
