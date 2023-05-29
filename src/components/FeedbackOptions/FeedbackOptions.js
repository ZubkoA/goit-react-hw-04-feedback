import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={css.Stat__feedback} onClick={onLeaveFeedback}>
    {options.map(option => (
      <button type="button" name={option} key={option}>
        {option}
      </button>
    ))}
    {/* <button type="button" name="good">
      good
    </button>
    <button type="button" name="bad">
      bad
    </button>
    <button type="button" name="neutral">
      neutral
    </button> */}
  </div>
);
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default FeedbackOptions;
