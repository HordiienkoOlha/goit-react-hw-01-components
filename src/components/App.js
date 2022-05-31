import user from 'dataFiles/user.json';
import data from 'dataFiles/data.json';
import friends from 'dataFiles/friends.json';
import transactions from 'dataFiles/transactions.json';
import Profile from './Profile/Profile';
import StatisticsList from './StatisticList/StatisticsList';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsList title="Upload stats" stats={data} />
      <StatisticsList stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
