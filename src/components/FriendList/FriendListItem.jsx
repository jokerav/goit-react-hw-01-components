import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
export default function FriendListItem({ friend }) {
  return (
    <li className={s.item} key={friend.id}>
      <span className={friend.isOnline ? s.online : s.offline}></span>
      <img
        className={s.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  // да, я знаю что проп-тайпы для friend уже расписаны в FriendList
  // и я не уверен стоит ли их прописывать повторно
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
