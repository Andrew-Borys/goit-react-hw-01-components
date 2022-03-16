import React from 'react';
import propTypes from 'prop-types';
import style from './StatisticsItem.module.css';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <div className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </div>
  );
};

StatisticsItem.prototypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};

export default StatisticsItem;
