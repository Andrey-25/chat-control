import styles from './Documentation.module.css';
import Arrow from '../../../../shared/assets/icon/arrow.svg';

export function DocumentationBlock() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.rectangle1}></div>
            <div className={styles.rectangle2}></div>
            <div className={styles.rectangle3}></div>
            <a href="https://chats-organization.gitbook.io/chat-control/general-information/about-the-chat-control-bot" target="_blank">
                <img className={styles.arrow} src={Arrow} alt="black arrow" />
            </a>
            <div className={styles.title}>
                Посмотреть документацию
            </div>
        </div>
    )
};