import { useTranslation } from 'react-i18next';

import styles from './PetProject.module.css';
import { Arrow } from '../../../../shared/ui/Icon/Arrow.jsx';

export function PetProject() {
    const { t } = useTranslation();

    const handleButtonClick = () => {
        window.open('https://chats-organization.gitbook.io/chat-control/general-information/about-the-project');
    };

    return (
        <div className={styles.wrapper} onClick={handleButtonClick}>
            <div className={styles.buttonWithIcon}>
                <Arrow mainColor="#111" />
            </div>

            <div className={styles.descr}>{t('navBar.petProject.description')}</div>

            <a
                href="https://chats-organization.gitbook.io/chat-control/general-information/about-the-project"
                className={styles.messenger}
                target="_blank"
                rel="noreferrer"
            >
                <h2 className={styles.header}> {t('navBar.petProject.title')}</h2>
            </a>
        </div>
    );
}
