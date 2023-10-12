import PropTypes from 'prop-types';
import css from './TransactionItem.module.css';

export const TransactionItem = ({ typeItem, idItem, amountItem, currencyItem }) => {
    return <tr key={idItem}>
    <td className={css.tableRow}>{typeItem}</td>
    <td className={css.tableRow}>{amountItem}</td>
    <td className={css.tableRow}>{currencyItem}</td>
  </tr>
}

TransactionItem.prototype = {
    key: PropTypes.string.isRequired,
    typeItem: PropTypes.string.isRequired,
    amountItem: PropTypes.number,    
    currencyItem: PropTypes.string.isRequired,
}