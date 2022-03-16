import PropTypes from 'prop-types';
import React from 'react';
import style from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={style.tableRow}>
      <td className={style.tableRowElement}>{type}</td>
      <td className={style.tableRowElement}>{amount}</td>
      <td className={style.tableRowElement}>{currency}</td>
    </tr>
  );
};

PropTypes.TransactionHistoryItem = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
