import React from 'react';
import Swip from "../Swip";
import styles from '../../styles/Home.module.css';


const Featured = () => {
    return (
        <div>
            
            <h1 className={styles.secure}>Featured Audits</h1>
            <hr className={styles.horizontal} width={150}/>
            <Swip />
          
        </div>
    );
};

export default Featured;