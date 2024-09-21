import styles from './TransactionHistory.module.css'
import TransactionsItem from '../TransactionsItem/TransactionsItem';

export default function TransactionHistory ({items}) {
    return (
        <div className={styles.tableWraper}>
             <table className={styles.tableContent}>
  <thead className={styles.tableHeader}>
    <tr className={styles.tableTitle}>
      <th className={styles.tabletElement}>Type</th>
      <th className={styles.tabletElement}>Amount</th>
      <th className={styles.tabletElement}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map((item) => {
            return (
              <TransactionsItem
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            );
          })}
  </tbody>
</table>
        </div>
     
    )
}