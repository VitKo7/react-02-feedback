import React from 'react';
import PropTypes from 'prop-types';
import ucFirst from '../../lib/ucFirst';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <button className={styles.btn} name={options} onClick={onLeaveFeedback}>
        {ucFirst(options)}
      </button>

      {/* <button className="btn btnGood" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button
        className="btn btnNeutral"
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button className="btn btnBad" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button> */}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
