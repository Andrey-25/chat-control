import styles from './PossibilitiesBlock.module.css';
import Arrow from '../../../../shared/assets/icon/arrow.svg';

export function PossibilitiesBlock() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bigCircle}></div>
            <div className={styles.smallCircle}></div>
            <div className={styles.desr}>
                Планирование, создание <br className={styles.mobile} /> команд,
                <br className={styles.desktop} />
                управление <br className={styles.mobile} /> участниками и постами сразу <br />в нескольких чатах
            </div>
            <a
                href="https://chats-organization.gitbook.io/chat-control/for-content-creators"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Arrow} alt="white arrow" target="_blank" />
            </a>
            <div className={styles.title}>Возможности бота</div>
        </div>
    );
}
