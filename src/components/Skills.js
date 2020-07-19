import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Text } from "grommet";
import skills from "../data/skills.json";

function Skills() {
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
        {skills.map((skill, index) => {
          return (
            <Row
              key={`skills_${index}`}
              start="md"
              center="xs"
              style={{ alignItems: "center" }}
            >
              <Text className="bold-text" size="xlarge">
                {skill.name}:{" "}
              </Text>
              {getSkillList(skill.values)}
            </Row>
          );
        })}
      </Col>
    </React.Fragment>
  );
}

function getSkillList(skills) {
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
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {skills.map((skill, index) => (
        <Tag
          key={`skill_${index}`}
          style={{
            backgroundColor: `${colors[index % colors.length]}`,
            margin: "0.5rem",
            padding: "0.5rem",
            borderRadius: "10px",
          }}
        >
          {skill}
        </Tag>
      ))}
    </div>
  );
}

function Tag(props) {
  return (
    <Text size="medium" style={props.style}>
      {props.children}
    </Text>
  );
}

export default Skills;
