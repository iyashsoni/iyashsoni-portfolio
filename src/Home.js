import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import Introduction from "./components/Introduction";
import CompanyInfo from "./components/CompanyInfo";
import TechSkills from "./components/TechSkills";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

export default class Home extends Component {
  render() {
    return (
      <Col style={{ padding: "2rem" }}>
        {/** Intro section */}
        <Row style={{ margin: "1rem" }}>
          <Introduction />
        </Row>
        <br />
        <hr />
        <br />
        {/** Work section */}
        <Row style={{ margin: "1rem" }}>
          <CompanyInfo />
        </Row>
        <br />
        {/** Skills section */}
        <Row style={{ margin: "1rem" }}>
          <TechSkills />
        </Row>
        <br />
        {/** Blogs section */}
        <Row style={{ margin: "1rem" }}>
          <Blogs />
        </Row>
        <br />
        {/** Contact section */}
        <Row style={{ margin: "1rem" }}>
          <Contact />
        </Row>
      </Col>
    );
  }
}
