
import styles from './Profile.module.css';


const Profile = ({name, tag, location, image, stats }) => {
    return (
      
      <div className={styles.profileWraper}>
        <div className={styles.profileCard}>
      <div className={styles.profileInfo}>
        <img className={styles.image}
          src={image}
          alt={name}
        />

        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>
    
      <ul className={styles.statsList}>
        <li className={styles.statsListItems}>
          <span>Followers</span>
          <span className={styles.statsValues}>{stats.followers}</span>
          </li>
          
        <li className={styles.statsListItems}>
          <span>Views</span>
          <span className={styles.statsValues}>{stats.views}</span>
          
        </li>

        <li className={styles.statsListItems}>
          <span>Likes</span>
          <span className={styles.statsValues}>{stats.likes}</span>
          
        </li>
      </ul>
    </div>
    </div>
        

    )
};

export default Profile





