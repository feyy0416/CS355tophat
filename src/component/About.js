import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", success: false };
  }
  handleSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    });

    fetch("./send-mail.php", {
      method: "POST",
      body: data
    }).then(res => {
      if (res.ok) {
        console.log("success");
      } else {
        console.log("error");
      }
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState = {
      [name]: value
    };
  };

  render() {
    return (
      <div
        className="container"
        style={{
          width: "350px",
          height: "500px",
          marginTop: "20px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <div style={{ padding: "30px" }}>
          <form onSumit={this.handleSubmit}>
            <h3 style={{ paddingBottom: "20px" }}> Send me a Message</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control input-box"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control input-box"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-control input-box"
                rows="3"
                onChange={this.handleChange}
              ></textarea>
            </div>
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
