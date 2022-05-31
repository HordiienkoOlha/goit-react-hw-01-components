import PropTypes from 'prop-types';
import TransactionItem from 'components/TransactionItem/TransactionItem';
import Container from 'components/Container/Container';
import styles from 'components/TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <table className={styles.transactionHistory}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
