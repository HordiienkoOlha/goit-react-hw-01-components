import PropTypes from 'prop-types';
import StatisticsItem from 'components/StatisticsItem/StatisticsItem';
import Container from 'components/Container/Container';
import styles from 'components/StatisticList/StatisticList.module.css';
import getRandomHexColor from 'helpers/getRandomHexColor';

function StatisticsList({ stats, title }) {
  return (
    <Container>
      <div className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.list}>
          {stats.map(stat => (
            <li
              key={stat.id}
              className={styles.item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <StatisticsItem label={stat.label} percentage={stat.percentage} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StatisticsList;
