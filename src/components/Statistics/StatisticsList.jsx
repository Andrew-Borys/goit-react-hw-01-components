import React from 'react';
import propTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import style from './StatisticsList.module.css';

const StatisticsList = ({ title, stats }) => {
  function randomColor() {
    let color =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() +
      '80';
    return color;
  }
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statsList}>
        {stats.map(stat => (
          <li key={stat.id} style={{ backgroundColor: randomColor() }}>
            <StatisticsItem label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

propTypes.StatisticsList = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
