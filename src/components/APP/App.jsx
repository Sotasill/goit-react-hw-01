import './App.module.css';
import userData from '../../userData.json';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import friends from '../../friends.json';
import TransactionHistory from '../Transaction/TransactionHistory';
import items from '../../transactions.json'






const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

<FriendList friends={friends} />
<TransactionHistory items={items} />   
      
    </>

 

    
  );
};

export default App
