import css from 'App.module.css';
import { Profile } from './components/Profile/Profile';
import user from './data/user.json';
import { Statistics } from './components/Statistics/Statistics';
import data from './data/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from './data/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <>
      <div className={css.wrapper}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div className={css.wrapper}>
        <Statistics title="Upload stats" stats={data} />
      </div>

      <div className={css.wrapper}>
        <FriendList friends={friends} />
      </div>
      <div className={css.wrapper}>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
