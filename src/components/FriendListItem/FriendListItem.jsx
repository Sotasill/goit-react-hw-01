import styles from './FriendListItem.module.css';
import clsx from 'clsx';



export default function FriendListItem ({ avatar, name, isOnline}) {
    return (
        <div className={styles.friendsWrapper}>
        <img className={styles.image} src={avatar} alt={name} width="48" />
        <p className={styles.friendName}>{name}</p>
        <p className={clsx(styles.friendStatus, isOnline ? styles.online : styles.offline)}>
        {isOnline ? 'Online' : 'Offline'}</p>
      </div>
    )
};