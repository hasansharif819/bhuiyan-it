import React from 'react';
import styles from '../../styles/Home.module.css'

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <div>
        
            <video
              loop={true}
              autoPlay={true}
              autoplaytimeout={10000}
              autoplayhoverpause='true'
              muted={true}
              height={500}
              width={600}
            >
              <source src='/cubess.mp4' type="video/mp4" />
            </video>
            </div>
          <div>
            <h1>BH<span className={styles.myStyle}>UIY</span>AN S<span className={styles.myStyle}>OF</span>T</h1>
            <h1>Emerging Web3 Ventures Trust Our Smart Contract Audits & Diligence Services</h1>
            <div className={styles.buttonPossition}>
              <button className={styles.button}>Our Works</button>
              <button className={styles.button}>Free Consultation</button>
            </div>
          </div>
          </div>
    );
};

export default HomePage;