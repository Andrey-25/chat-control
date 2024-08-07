import styles from './FAQ.module.css';
import Arrow from '../../../../shared/assets/icon/arrow.svg';

export function FAQ() {
    return (
        <div className={styles.wrapper}>
            <a href="#">
                <img className={styles.arrow} src={Arrow} alt="arrow" />
            </a>

            <h2 className={styles.header}>FAQ</h2>
        </div>
    )
}