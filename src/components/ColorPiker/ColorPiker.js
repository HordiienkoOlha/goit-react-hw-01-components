import styles from 'components/ColorPiker/ColorPiker.modules.css';
// import StatisticsItem from 'components/StatisticsItem/StatisticsItem';

function ColorPicker({ options }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <div>
        {options.map(option => (
          <span
            key={option.label}
            className={styles.option}
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
        {/* <StatisticsItem label={stat.label} percentage={stat.percentage} /> */}
      </div>
    </div>
  );
}

export default ColorPicker;
