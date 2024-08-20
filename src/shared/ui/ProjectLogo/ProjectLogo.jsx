import { Link } from 'react-router-dom'
import styles from './ProjectLogo.module.css';
import logo from '../../assets/icon/MainLogo.svg';

export function ProjectLogo() {
    return (
        <Link className={styles.link} to='/'>
            <img src={logo} alt='chatControl logo' />
            <span>ChatControl</span>
        </Link>
    );
}
