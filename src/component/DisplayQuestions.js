import React, { Component } from "react";
import "./questionDisplay.css";
export default class DisplayQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }
  componentDidMount() {
    this.fetchData();
    let intervalId = setInterval(() => this.fetchData(), 1000);
    this.setState({
      intervalId: intervalId
    });
  }
  async fetchData() {
    fetch("/questions")
      .then(response => {
        if (response.status === 200) {
          //   const json = await response.json();
          //   console.log(json);
          return response.json();
        } else if (response.status === 408) {
          console.log("SOMETHING WENT WRONG");
        }
      })
      .then(questions => this.setState({ questions }))
      .catch(err => console.log(err));
    this.setState({
      count: this.state.id
    });
    console.log(this.state);
  }
  render() {
    return (
      <div className="container question-list">
        <form>
          {this.state.questions.map(item => (
            <div
              className="card container"
              key={item.id}
              style={{
                width: "80%",
                justifyContent: "center",
                marginTop: "20px"
              }}
            >
              <div className="card-body">
                <h4 className="card-title">
                  {item.id}. {item.title}
                </h4>
                <label>
                  <input type="radio" value="option1" checked={false} />A
                  {item.a}
                </label>
                <br />
                <label>
                  <input type="radio" value="option1" checked={false} />B
                  {item.b}
                </label>
                <br />
                <label>
                  <input type="radio" value="option1" checked={false} />C
                  {item.c}
                </label>
                <br />
                <label>
                  <input type="radio" value="option1" checked={false} />D
                  {item.d}
                </label>
              </div>
            </div>
          ))}
        </form>
      </div>
    );
  }
}
