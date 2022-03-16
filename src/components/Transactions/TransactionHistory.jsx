import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem';
import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={style.TransactionsContainer}>
      <table className={style.tableHistory}>
        <thead className={style.tableHeader}>
          <tr className={style.tableHeaderBox}>
            <th className={style.tableHeaderElement}>Type</th>
            <th className={style.tableHeaderElement}>Amount</th>
            <th className={style.tableHeaderElement}>Currency</th>
          </tr>
        </thead>

        <tbody className={style.tableBody}>
          {items.map(item => (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

PropTypes.TransactionHistory = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default TransactionHistory;
