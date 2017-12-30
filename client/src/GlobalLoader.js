import React, { Component } from 'react';
import { LinearProgress } from 'material-ui/Progress';

export default class GlobalLoader extends Component {
  state = { completed: 0 };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: completed + diff });
    }
  };

  render() {
    return <LinearProgress mode="determinate" value={this.state.completed} />;
  }
};
