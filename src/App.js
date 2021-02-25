import React, { Component } from 'react';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';
import Section from './components/section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementCounter = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  getTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  getPositive = () => {
    if (!this.getTotal()) {
      return 0;
    } else {
      return ((this.state.good / this.getTotal()) * 100).toFixed(2);
    }
  };

  render() {
    const { good, bad, neutral } = this.state;
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please, leave your feedback:">
          <div className="buttons">
            {options.map(name => {
              return (
                <FeedbackOptions
                  key={name}
                  options={name}
                  onLeaveFeedback={this.handleIncrementCounter}
                />
              );
            })}
          </div>
        </Section>

        <Section title="Statistics:">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.getTotal()}
            positivePercentage={this.getPositive()}
          />
        </Section>
      </>
    );
  }
}

export default App;
