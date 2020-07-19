import React from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Introduction from "./components/Introduction";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import "./App.css";
import Waves from "./images/wave.svg";

function App() {
  return (
    <Grid
      fluid
      style={{
        padding: "unset",
      }}
    >
      <Col
        style={{
          padding: "2rem",
          backgroundImage: `url(${Waves})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/** Intro section */}
        <Row style={{ margin: "1rem" }}>
          <Introduction />
        </Row>
        <br />
        <hr />
        <br />
        {/** Work section */}
        <Row style={{ margin: "1rem" }}>
          <Work />
        </Row>
        <br />
        {/** SideGigs section */}
        <Row style={{ margin: "1rem" }}>
          <Projects />
        </Row>
        <br />
        {/** Skills section */}
        <Row style={{ margin: "1rem" }}>
          <Skills />
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
    </Grid>
  );
}

export default App;
