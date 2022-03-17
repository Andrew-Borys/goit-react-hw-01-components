import React from 'react';
import StatisticsItem from './StatisticsItem';
import propTypes from 'prop-types';
import randomColor from '../helpers/randomColor';
import style from './StatisticsList.module.css';

const StatisticsList = ({ title, stats }) => {
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
