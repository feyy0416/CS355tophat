import React, { Component } from "react";
// import "./questionDisplay.css";
export default class AddQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      title: "",
      a: "",
      b: "",
      c: "",
      d: "",
      ans: "",
      id: 3,
      count: 0,
      intervalId: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  handlSubmit = e => {
    e.preventDefault();
    this.addNewQuestions();
    console.log(this.state);
  };
  async addNewQuestions() {
    const obj = {
      title: this.state.title,
      a: this.state.a,
      b: this.state.b,
      c: this.state.c,
      d: this.state.d,
      ans: this.state.ans,
      id: this.state.count
    };
    fetch("/questions/add", {
      method: "POST",
      body: JSON.stringify(obj), //add the obj
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        let json = resp.json();
        alert("success");
        console.log(json);
      })
      .catch(err => console.log(err));
  }
  catch(err) {
    console.log(err);
  }

  render() {
    let { title, a, b, c, d, ans } = this.state;
    return (
      <div>
        <div
          className="container"
          style={{
            width: "700px",
            padding: "50px",
            boxShadow: "3px 3px 5px 6px #cccc",
            margin: "10px auto",
            backgroundColor: "white"
          }}
        >
          <h1> Enter your Questions </h1>
          <form type="submit" onSubmit={this.handlSubmit}>
            <div>
              <div className="form-group">
                <input
                  placeholder="Enter questions"
                  className="form-control"
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder=" Enter answer A"
                  className="form-control"
                  type="text"
                  name="a"
                  value={a}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Enter answer B"
                  className="form-control"
                  type="text"
                  name="b"
                  value={b}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Enter answer C"
                  className="form-control"
                  type="text"
                  name="c"
                  value={c}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Enter answer D"
                  className="form-control"
                  type="text"
                  name="d"
                  value={d}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Enter answer"
                  className="form-control"
                  type="text"
                  name="ans"
                  value={ans}
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>

        {console.log(this.state.questions)}
      </div>
    );
  }
}
