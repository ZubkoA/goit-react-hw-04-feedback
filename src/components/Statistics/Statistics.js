import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
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
        Total:{' '}
        <span className={css.Statistic__count}>
          {total(good, neutral, bad)}
        </span>
      </p>

      <p className={css.Statistic__text}>
        Positive Feedback:{' '}
        <span className={css.Statistic__count}>
          {!positivePercentage(good, neutral, bad)
            ? 0
            : positivePercentage(good, neutral, bad)}
          %
        </span>
      </p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
