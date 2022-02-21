import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { time : new Date() };
  }
  componentWillMount() {
    clearInterval(this.timer);
  }
  componentDidMount() {
    this.timer = setInterval(() =>{
      this.setState({ time: new Date() });
    }, 1000)
  }
  render() {
    return (
      <div>
        <strong>{this.props.title}</strong>
        <p>{this.state.time.toLocaleString('en-US', { timeZone: this.props.zone || 'Asia/Karachi'})}</p>
      </div>
    )
  }
}
