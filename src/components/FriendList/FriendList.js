import PropTypes from 'prop-types';
import FriendItem from 'components/FriendItem/FriendItem';
import Container from 'components/Container/Container';
// import styles from 'components/FriendList/FrienItem.module.css';

const FriendList = ({ friends }) => {
  return (
    <Container>
      <ul className="friend-list">
        {friends.map(friend => (
          <li key={friend.id} className="item">
            <FriendItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              id={friend.id}
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
