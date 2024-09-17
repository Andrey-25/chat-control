import { useTranslation } from 'react-i18next';

import styles from './PossibilitiesBlock.module.css';
import { Arrow } from '../../../../shared/ui/Icon/Arrow';

export function PossibilitiesBlock() {
    const { t } = useTranslation();

    const handleButtonClick = () => {
        window.open('https://chats-organization.gitbook.io/chat-control/for-content-creators', '_blank');
    };
    return (
        <div onClick={handleButtonClick} className={styles.wrapper}>
            <div className={styles.bigCircle} />
            <div className={styles.smallCircle} />
            <div className={styles.description}>{t('chatInfo.possibilitiesBlock.description')}</div>

            <div className={styles.buttonWithIcon}>
                <Arrow mainColor="#fff" />
            </div>
            <div className={styles.title}>{t('chatInfo.possibilitiesBlock.title')}</div>
        </div>
    );
}
