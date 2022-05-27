import PropTypes from 'prop-types';

const Statistics = ({ label, percentage }) => {
  return (
    <section className="statistics">
      <div className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </div>
    </section>
  );
};
Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
