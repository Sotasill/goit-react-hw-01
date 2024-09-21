import styles from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'



export default function FriendList ({friends}) {
    return (<div className={styles.friendListWrapper}>
        <ul className={styles.friendListList}>
          {friends.map((item) => (
            <li key={item.id} className={styles.friendListItem}>
              <FriendListItem
              avatar = {item.avatar}
              name = {item.name}
              isOnline = {item.isOnline} />

              
            </li>
          ))}
        </ul>
      </div>)};



