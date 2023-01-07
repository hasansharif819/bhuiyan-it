import React from 'react';
import styles from '../../styles/Home.module.css';

const Amount = () => {
    return (
        <div className={styles.amount}>
            <div className={styles.amountSingle}>
              <h1>$10B+</h1>
              <h3>Total Amount Lost To Defi Hacks and Scams In 2022</h3>
            </div>
            <div className={styles.amountSingle}>
              <h1>1000+</h1>
              <h3>Vulnerabilities Fixed</h3>
            </div>
            <div className={styles.amountSingle}>
              <h1>700+</h1>
              <h3>web3 Projects Secured</h3>
            </div>
            <div className={styles.amountSingle}>
              <h1>$15B+</h1>
              <h3>Total Amount Secured By QuillAudits</h3>
            </div>
          </div>
    );
};

export default Amount;