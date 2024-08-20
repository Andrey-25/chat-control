import styles from './TeamBlock.module.css';
import { Arrow } from '../../../../shared/ui/Icon/Arrow.jsx';
import HumonIcon from '../../../../shared/assets/icon/Ellipse 46.png';

export function TeamBlock() {
    return (
        <div className={styles.wrapper}>
            <a href="https://chats-organization.gitbook.io/chat-control/our-team" target="_blank" rel="noreferrer">
                <Arrow mainColor="#000" />
            </a>

            <div className={styles.participants}>
                <div className={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div className={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div className={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div className={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div className={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div className={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div className={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div className={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div className={styles.circle}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
            </div>

            <div className={styles.title}>Команда</div>
        </div>
    );
}
