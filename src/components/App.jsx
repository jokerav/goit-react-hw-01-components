import user from './Profile/user';
import Profile from './Profile/Profile';
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
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        // stats={ user.stats.followers user.stats.views user.stats.likes}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={ user.stats.likes}
      />
    </div>
  );
};



