import user from './Profile/user';
import data from './Statistics/data';
import friends from './FriendList/friends.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
// деструктуризируем юзера
const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;
export default function App() {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   textTransform: 'uppercase',
    //   color: '#010101',
    // }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}
