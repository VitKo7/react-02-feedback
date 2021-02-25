import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../notification/Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification />;
  } else {
    return (
      <>
        <p className={styles.res}>Good: {good}</p>
        <p className={styles.res}>Neutral: {neutral}</p>
        <p className={styles.res}>Bad: {bad}</p>
        <p className={styles.ttl}>Total: {total}</p>
        <p className={styles.ttl}>Positive feedback: {positivePercentage}%</p>
      </>
    );
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.any.isRequired,
};

export default Statistics;
