import user from './Profile/user';
import Profile from './Profile/Profile';
// деструктуризируем юзера
const { username, tag, location, avatar, stats: { followers, views, likes} } = user;
export default function App()  {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',      
        color: '#010101',
      }}
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
    </div>
  );
};



