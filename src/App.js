import React from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Introduction from "./components/Introduction";
import CompanyInfo from "./components/CompanyInfo";
import SideGigs from "./components/SideGigs";
import TechSkills from "./components/TechSkills";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import "./App.css";
import Waves from "./images/wave.svg";

class App extends React.Component {
  render() {
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
            <CompanyInfo />
          </Row>
          <br />
          {/** SideGigs section */}
          <Row style={{ margin: "1rem" }}>
            <SideGigs />
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
      </Grid>
    );
  }
}

export default App;
