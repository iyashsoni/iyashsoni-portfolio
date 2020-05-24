import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Text, Anchor } from "grommet";
import axios from "axios";

const mediumBlogsUrl =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@iYashSoni";

export default class Blogs extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    axios
      .get(mediumBlogsUrl)
      .then((res) => {
        const blogs = res.data.items
          .filter((item) => item.categories.length > 0)
          .map((item) => {
            const { title, link } = item;
            return { title, link };
          });
        this.setState({ blogs });
      })
      .catch((err) => console.log("Failed to fetch Blogs.", err));
  }

  renderBlogItem() {
    return this.state.blogs.map((blog) => {
      return (
        <Row start="lg" style={{ alignItems: "center" }}>
          <Anchor color="black" href={blog.link}>
            <Text className="medium-text" size="large">
              {blog.title}
            </Text>
          </Anchor>
        </Row>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.blogs.length > 0 ? (
          <React.Fragment>
            <Col xs={12} lg={3}>
              <Row end="lg" center="xs">
                <Text
                  style={{ width: "100%" }}
                  className="bold-text heading"
                  size="xxlarge"
                >
                  Blogs
                </Text>
              </Row>
            </Col>
            <Col xs={12} lg={9}>
              {this.renderBlogItem()}
            </Col>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}
