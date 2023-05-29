import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import { Notification, Statistics } from '../Statistics';
import css from './App.module.css';
import React, { useState } from 'react';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + bad + neutral)) * 100);
  };
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div className={css.Container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handlClick}
          options={Object.keys({ good, neutral, bad })}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default App;
