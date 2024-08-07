import styles from './ProjectLogo.module.css';

export function ProjectLogo({logo}) {
    return (
        <a className={styles.link} href='#'>
            {logo}
            <span>ChatControl</span>
        </a>
    );
}
