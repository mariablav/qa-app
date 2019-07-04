import React, { Component } from "react";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null
    };
  }

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const questions = JSON.parse(localStorage.getItem("questions"));
    this.setState({
      question: questions[params.questionId]
    });
  }

  render() {
    const { question } = this.state;
    if (question === null) return <p>Loading ...</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{question.title}</h1>
            <p className="lead">{question.description}</p>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
