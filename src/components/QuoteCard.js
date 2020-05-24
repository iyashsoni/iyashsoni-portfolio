import React, { Component } from "react";
import { Text } from "grommet";
import { BlockQuote } from "grommet-icons";
import axios from "axios";

const quoteUrl = "https://quotes.rest/qod?category=inspire&language=en";

export default class QuoteCard extends Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    axios
      .get(quoteUrl)
      .then(({ data }) => {
        const qotd = data.contents.quotes[0];
        this.setState({ quote: qotd.quote, author: qotd.author });
      })
      .catch((err) => {
        console.log("Failed to fetch Quote.", err);
      });
  }

  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
      >
        {this.state.quote !== "" ? (
          <React.Fragment>
            <Text className="medium-text" size="medium">
              <BlockQuote color="#ff6363" size="large" /> {this.state.quote}
            </Text>
            <Text
              className="light-text"
              size="medium"
              style={{ padding: "unset" }}
            >
              {"- "}
              {this.state.author}
            </Text>{" "}
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
