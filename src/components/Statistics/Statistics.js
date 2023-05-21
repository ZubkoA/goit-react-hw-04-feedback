import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div className={css.Flex}>
      <p className={css.Statistic__text}>
        Good: <span className={css.Statistic__count}>{good}</span>
      </p>

      <p className={css.Statistic__text}>
        Neutral: <span className={css.Statistic__count}>{neutral}</span>
      </p>

      <p className={css.Statistic__text}>
        Bad: <span className={css.Statistic__count}>{bad}</span>
      </p>
      <p className={css.Statistic__text}>
        Total: <span className={css.Statistic__count}>{total}</span>
      </p>

      <p className={css.Statistic__text}>
        Positive Feedback:{' '}
        <span className={css.Statistic__count}>
          {!positiveFeedback ? 0 : positiveFeedback}%
        </span>
      </p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func,
};
