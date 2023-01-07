import React from 'react';
import Image from "next/image";
import styles from '../../styles/Home.module.css';

const Secure = () => {
    return (
        <div>
            <h1 className={styles.secure}>How we Secure your Web3 project</h1>
            <hr className={styles.horizontal} width={400}/>
            <Image
                  src="/web.png"
                  alt="Picture of the author"
                  height={500}
                  width={1250}
                  />

                  <button  className={styles.secureButton}>KNOW MORE</button>
          </div>
    );
};

export default Secure;