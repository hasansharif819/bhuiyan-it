import React from 'react';
import styles from '../../styles/Home.module.css';
import EcoSwip from './EcoSwip';


const Ecosystem = () => {
    return (
        <div>
            <h1 className={styles.secure}>Our Ecosystem Partners</h1>
            <hr className={styles.horizontal} width={150}/>
            <EcoSwip />
        </div>
    );
};

export default Ecosystem;