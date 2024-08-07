import styles from './TeamBlock.module.css';
// import Arrow from '../../../../shared/assets/icon/arrow.svg';
import Arrow from '../../../../shared/ui/Arrow/Arrow.jsx';
import HumonIcon from '../../../../shared/assets/icon/Ellipse 46.png';

export function TeamBlock() {
    return (
        <div className={styles.wrapper}>
            <a href="https://chats-organization.gitbook.io/chat-control/our-team" target="_blank">
                {/* <img className={styles.arrow} src={Arrow} alt="black arrow" /> */}
                <Arrow mainColor={'#000'} />
            </a>

            <div className={styles.participants}>
                <div class={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div class={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div class={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div class={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div class={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div class={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div class={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                <div class={styles.galleryItem}>
                    <img src={HumonIcon} alt={styles.human} />
                </div>
                    <div class={styles.circle}>
                        <div class={styles.dot}></div>
                        <div class={styles.dot}></div>
                        <div class={styles.dot}></div>
                    </div>
                </div>

            <div className={styles.title}>
                Команда
            </div>
        </div>
    );
};