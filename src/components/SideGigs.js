import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Text, Anchor } from "grommet";

export default class SideGigs extends Component {
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
              Side Gigs
            </Text>
          </Row>
        </Col>
        <Col xs={12} md={8}>
          <Row start="md" center="xs" style={{ alignItems: "center" }}>
            <Text className="bold-text" size="xlarge">
              <Anchor
                color="#0099ff"
                href={"https://minimylist.netlify.app"}
                target="_blank"
              >
                minimylist
              </Anchor>
            </Text>
            <Text size="medium" style={{ paddingLeft: "1rem" }}>
              a Web-Extension that you can use for keeping a tab on quick-notes
              and tasks at hand, hence - a productivity assistant!
            </Text>
          </Row>
          <Row start="md" center="xs" style={{ alignItems: "center" }}>
            <Text className="bold-text" size="xlarge">
              <Anchor
                color="#0099ff"
                href={
                  "https://play.google.com/store/apps/details?id=com.yashsoni.writer"
                }
                target="_blank"
              >
                Writer- Scribble your heart out
              </Anchor>
            </Text>
            <Text size="medium" style={{ paddingLeft: "1rem" }}>
              an Android App for creating micro-tales and sharing a high-quality
              exported Image directly to the other Apps.
            </Text>
          </Row>
          <Row start="md" center="xs" style={{ alignItems: "center" }}>
            <Text className="bold-text" size="xlarge">
              <Anchor
                color="#0099ff"
                href={"https://www.npmjs.com/package/easy-logging"}
                target="_blank"
              >
                easy-logging
              </Anchor>
            </Text>
            <Text size="medium" style={{ paddingLeft: "1rem" }}>
              An npm module that works as a replacement to boring console logs.
              Easily write beautiful JSON formatted logs with colors for each
              level.
            </Text>
          </Row>
          <Row
            start="md"
            center="xs"
            style={{ alignItems: "center", border: "1px gray" }}
          >
            <Text className="bold-text" size="xlarge">
              <Anchor
                color="#0099ff"
                href={"https://www.npmjs.com/package/easy-web-notifications"}
                target="_blank"
              >
                easy-web-notifications
              </Anchor>
            </Text>
            <Text size="medium" style={{ paddingLeft: "1rem" }}>
              An npm module that will help you save some time in implementing
              Web Push Notifications in Web Client Applications.
            </Text>
          </Row>
        </Col>
      </React.Fragment>
    );
  }
}
