import PropTypes from 'prop-types';
import StatisticsItem from 'components/StatisticsItem/StatisticsItem';
import Container from 'components/Container/Container';
import styles from 'components/StatisticList/StatisticList.module.css';
import ColorPicker from 'components/ColorPiker/ColorPiker';
import colorPickerOptions from 'dataFiles/colorPicker.json';

function StatisticsList({ stats, title }) {
  return (
    <Container>
      <div className={styles.statistics}>
        {title && <h2>{title}</h2>}
        <ul className={styles.list}>
          {stats.map(stat => (
            <li key={stat.id} className={styles.item}>
              <StatisticsItem label={stat.label} percentage={stat.percentage} />
              <ColorPicker options={colorPickerOptions}></ColorPicker>
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
