import user from 'dataFiles/user.json';
import data from 'dataFiles/data.json';
import Profile from './Profile/Profile';
import StatisticsList from './Statistics/StatisticsList';

export default function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics text="Upload stats" stats={data} />
       */}
      <StatisticsList title="Upload stats" stats={data} />
      <StatisticsList stats={data} />
    </div>
  );
}

// {
//   text === '' && <h2 className="title">Upload stats</h2>;
// }
