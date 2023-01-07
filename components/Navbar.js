import Link from "next/link";
import styles from '../styles/Nav.module.css';


const Navbar = () => {
  return (
        <nav className={styles.navbar}>
            <h1>
                <Link href='/'>BHUIYAN SOFT</Link>
            </h1>
            <ul className={styles.navbarLinks}>
                <li>
                    <Link href='/Home'>
                    HOME
                    </Link>
                </li>
                <li>
                    <Link href='/About'>
                    ABOUT
                    </Link>
                </li>
                <li>
                    <Link href='/Contact'>
                    CONTACT
                    </Link>
                </li>
                <li>
                    <Link href='/Consultant'>
                    CONSULTANT
                    </Link>
                </li>
                <li>
                    <Link href='/Service'>
                    SERVICE
                    </Link>
                </li>
            </ul>
        </nav>
  )
}

export default Navbar