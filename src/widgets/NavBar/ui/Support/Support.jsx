import { useTranslation } from 'react-i18next';

import styles from './Support.module.css';
import { Arrow } from '../../../../shared/ui/Icon/Arrow';
import { StarIcon } from '../../../../shared/ui/Icon/StarIcon.jsx';

export function Support() {
    const { t } = useTranslation();

    const handleButtonClick = () => {
        window.open('https://chats-organization.gitbook.io/chat-control/general-information/about-the-project');
    };

    return (
        <div className={styles.wrapper} onClick={handleButtonClick}>
            <div className={styles.buttonWithIcon}>
                <Arrow mainColor="#111" />
            </div>

            <div className={styles.descr}>{t('navBar.support.description')}</div>

            <div className={styles.innerWrapper}>
                <a
                    href=" https://t.me/tribute/app?startapp=d6eg"
                    className={styles.messenger}
                    target="_blank"
                    rel="noreferrer"
                >
                    <h2 className={styles.header}>{t('navBar.support.title')}</h2>
                </a>
                <div className={styles.imgWrapper}>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon />
                    ))}
                </div>
            </div>
        </div>
    );
}
