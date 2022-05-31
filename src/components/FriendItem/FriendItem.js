import PropTypes from 'prop-types';
import styles from 'components/FriendItem/FriendItem.module.css';

const FriendItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? styles.green : styles.red;
  return (
    <>
      <div className={styles.round}>
        <span className={statusClass}>{isOnline}</span>
      </div>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
// {
//   `${isOnline ? 'green' : 'red'}`;
// }
