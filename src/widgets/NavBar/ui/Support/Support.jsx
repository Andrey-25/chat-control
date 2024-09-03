import styles from './Support.module.css';
import { Arrow } from '../../../../shared/ui/Icon/Arrow';
import { Button } from '../../../../shared/ui/Button/Button.jsx';
import Star from '../../../../shared/assets/icon/star.svg';

export function Support() {
    const handleButtonClick = () => {
        window.open('https://chats-organization.gitbook.io/chat-control/general-information/about-the-project');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonWithIcon}>
                <Button icon={<Arrow mainColor="#111" />} onClick={handleButtonClick} variant={'icon'} />
            </div>

            <div className={styles.descr}>
                Этот проект задумал <a href="#">Человек Человекович</a> — гений, <br className={styles.mobile} />
                миллиардер, плейбой. филантроп <br className={styles.mobile} />
                <br className={styles.desktop} />
                Он занимается этим и этим и вон тем, и прибрал к себе <br className={styles.mobile} />
                в лапки нас, <br className={styles.desktop} />
                беспризорников
            </div>

            <div className={styles.innerWrapper}>
                <a
                    href="https://chats-organization.gitbook.io/chat-control/general-information/about-the-project"
                    className={styles.messenger}
                    target="_blank"
                    rel="noreferrer"
                >
                    <h2 className={styles.header}>Поддержка</h2>
                </a>
                <div className={styles.imgWrapper}>
                    <img src={Star} alt="star" className={styles.star} />
                    <img src={Star} alt="star" className={styles.star} />
                    <img src={Star} alt="star" className={styles.star} />
                    <img src={Star} alt="star" className={styles.star} />
                    <img src={Star} alt="star" className={styles.star} />
                </div>
            </div>
        </div>
    );
}
