import PropTypes from 'prop-types';
import FriendItem from 'components/FriendItem/FriendItem';
import Container from 'components/Container/Container';
import styles from 'components/FriendList/FrienItem.module.css';

const FriendList = ({ friends }) => {
  return (
    <Container>
      <ul className={styles.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id} className={styles.item}>
            <FriendItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              id={id}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
