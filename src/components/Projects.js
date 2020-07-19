import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Text, Anchor } from "grommet";
import projects from "../data/projects.json";

function Projects() {
  return (
    <React.Fragment>
      <Col xs={12} md={4}>
        <Row end="md" center="xs">
          <Text
            style={{ width: "100%" }}
            className="bold-text heading"
            size="xxlarge"
          >
            Side Gigs
          </Text>
        </Row>
      </Col>
      <Col xs={12} md={8}>
        {projects.map((project, index) => {
          return (
            <Row
              key={`project_${index}`}
              start="md"
              center="xs"
              style={{ alignItems: "center" }}
            >
              <Col>
                <Text className="bold-text" size="xlarge">
                  <Anchor color="#0099ff" href={project.link} target="_blank">
                    {project.name}
                  </Anchor>
                </Text>
                <div style={{ marginLeft: "1rem" }}>
                  <Text size="medium">{project.desc}</Text>
                </div>
                {getTagList(project.tags)}
              </Col>
            </Row>
          );
        })}
      </Col>
    </React.Fragment>
  );
}

function getTagList(tags) {
  const colors = [
    "lightgoldenrodyellow",
    "lightcyan",
    "lightsalmon",
    "lightgreen",
    "lightpink",
  ];
  return (
    <div
      style={{
        marginLeft: "1rem",
        marginTop: "0.5rem",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {tags.map((tag, index) => (
        <Tag
          key={`tag_${index}`}
          style={{
            backgroundColor: `${colors[index % colors.length]}`,
            margin: "0.25rem",
            padding: "0.25rem",
            borderRadius: "10px",
          }}
        >
          #{tag}
        </Tag>
      ))}
    </div>
  );
}

function Tag(props) {
  return (
    <Text size="small" style={props.style}>
      {props.children}
    </Text>
  );
}
export default Projects;
