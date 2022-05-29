import PropTypes from 'prop-types';
import styles from 'components/Profile/Profile.module.css';
import Container from 'components/Container/Container';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
        <div className={styles.profile}>
          <div className="description">
            <img src={avatar} alt="User avatar" className="avatar" />
            <p className={styles.name}>{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
          </div>
          <ul className={styles.stats}>
            <li className={styles.statsItem}>
              <span className="label">Followers</span>
              <span className={styles.quantity}>{stats.followers}</span>
            </li>
            <li className={styles.statsItem}>
              <span className="label">Views</span>
              <span className={styles.quantity}>{stats.views}</span>
            </li>
            <li className={styles.statsItem}>
              <span className="label">Likes</span>
              <span className={styles.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
