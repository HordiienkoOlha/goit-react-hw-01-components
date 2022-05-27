import Statistics from 'components/Statistics/Statistics';
import PropTypes from 'prop-types';

function StatisticsList({ stats }) {
  return (
    <section>
      <h2 className="title">Upload stats</h2>;
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <Statistics label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
