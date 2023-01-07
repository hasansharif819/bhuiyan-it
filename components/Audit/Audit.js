import React from 'react';
// import styles from '../../styles/Home.module.css';
import './Audit.module.css';

const Audit = () => {
    return (
        <div>
            <h1 className='secure'>What is the Need of Smart Contract Audit?</h1>
            <hr className='horizontal' width={300}/>
            <div className='auditParagraph'>
                <p id='auditParagraph1'>47.3% of the Web3 Hacks in First Half of 2022 were due to Smart Contract Vulnerabilities.</p>
                <p>Only 52.7% of the Exploited Web3 Projects were Audited.</p>
                <p>Smart Contract Audits Build Social Authority and,</p>
                <p>Helps in Earning Users/Investors Trust for the Product</p>
            </div>
        </div>
    );
};

export default Audit;