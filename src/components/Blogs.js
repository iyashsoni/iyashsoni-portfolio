import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Text, Anchor } from "grommet";
import axios from "axios";

const mediumBlogsUrl =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@iYashSoni";
const devToUrl =
  "https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed/iyashsoni";

export default class Blogs extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
    };
  }

  async componentDidMount() {
    const promises = [];
    promises.push(axios.get(mediumBlogsUrl));
    promises.push(axios.get(devToUrl));
    const result = await Promise.all(promises);
    const mediumBlogs = result[0].data.items;
    const devToBlogs = result[1].data.items;
    const blogs = [];
    blogs.push(
      ...mediumBlogs
        .filter((item) => item.categories.length > 0)
        .map((item) => {
          const { title, link, pubDate } = item;
          return { title, link, pubDate };
        })
    );

    blogs.push(
      ...devToBlogs
        .filter((item) => item.categories.length > 0)
        .map((item) => {
          const { title, link, pubDate } = item;
          return { title, link, pubDate };
        })
    );
    blogs.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    this.setState({ blogs });
  }

  renderBlogItem() {
    return this.state.blogs.map((blog, index) => {
      return (
        <Row
          key={index}
          start="lg"
          style={{
            alignItems: "center",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
        >
          <Anchor color="black" href={blog.link} target="_blank">
            <Text
              className="medium-text"
              size="large"
              style={{ padding: "unset" }}
            >
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
            <Col xs={12} lg={3} style={{ padding: "unset" }}>
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
