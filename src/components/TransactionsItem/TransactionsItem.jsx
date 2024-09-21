import styles from './TransactionsItem.module.css'

export default function TransactionsItem ({type, amount, currency}) {
    return (
        <tr className={styles.tableRow}>
      <td className={styles.tableData}>{type}</td>
      <td className={styles.tableData}>{amount}</td>
      <td className={styles.tableData}>{currency}</td>
    </tr>
    );
};