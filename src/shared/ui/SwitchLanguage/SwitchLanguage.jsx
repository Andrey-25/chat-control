import styles from './SwitchLanguage.module.css';

export function SwitchLanguage() {
    return (
        <div className={styles.container}>
            <button className={styles.btn}>Ru</button>
            <button className={styles.btn}>En</button>
        </div>
    );
}