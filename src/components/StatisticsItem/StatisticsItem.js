import PropTypes from 'prop-types';
import styles from 'components/StatisticsItem/StatisticsItem.module.css';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </>
  );
};
StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
