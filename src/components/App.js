import React from 'react';
import ProfileList from './Profile/ProfileList';
import StatisticsList from './Statistics/StatisticsList';
import FriendList from './Friends/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';
import users from './dataForBackEnd/users.json';
import stats from './dataForBackEnd/data.json';
import friends from './dataForBackEnd/friends.json';
import transactions from './dataForBackEnd/transactions.json';

const App = () => {
  return (
    <div>
      <ProfileList users={users} />
      <StatisticsList title={'Upload stats'} stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
