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
      over: false,
    };
  }

  componentDidMount() {
    axios
      .get(quoteUrl)
      .then(({ data }) => {
        const qotd = data.contents.quotes[0];
        this.setState({ quote: qotd.quote, author: qotd.author }, () => {
          localStorage.setItem("quote", qotd.quote);
          localStorage.setItem("author", qotd.author);
        });
      })
      .catch((err) => {
        let quote = localStorage.getItem("quote");
        let author = localStorage.getItem("author");
        if (quote) {
          this.setState({ quote, author });
        }
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
              <BlockQuote color="#0099ff" size="large" /> {this.state.quote}{" "}
            </Text>
            <Text
              className="light-text"
              size="medium"
              style={{ padding: "unset" }}
            >
              {"- "}
              {this.state.author}
            </Text>
            <span
              style={{
                zIndex: "50",
                fontSize: "0.9em",
                fontWeight: "bold",
                marginTop: "1rem",
              }}
            >
              <img
                src="https://theysaidso.com/branding/theysaidso.png"
                height="20"
                width="20"
                alt="theysaidso.com"
              />
              <a
                href="https://theysaidso.com"
                title="Powered by quotes from theysaidso.com"
                style={{
                  color: "#ccc",
                  marginLeft: "4px",
                  verticalAlign: "middle",
                }}
              >
                They Said So®
              </a>
            </span>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
