import user from 'dataFiles/user.json';
import data from 'dataFiles/data.json';
import friends from 'dataFiles/friends.json';
import transactions from 'dataFiles/transactions.json';
import Profile from './Profile/Profile';
import StatisticsList from './Statistics/StatisticsList';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div className="App">
      <section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section>
        <StatisticsList title="Upload stats" stats={data} />
      </section>
      <section>
        <StatisticsList stats={data} />
      </section>
      <section>
        <FriendList friends={friends} />
      </section>
      <section>
        <TransactionHistory items={transactions} />
      </section>
    </div>
  );
}
