import { useTranslation } from 'react-i18next';

import styles from './Documentation.module.css';
import { Arrow } from '../../../../shared/ui/Icon/Arrow';

export function DocumentationBlock() {
    const { t } = useTranslation();

    const handleButtonClick = () => {
        window.open(
            'https://chats-organization.gitbook.io/chat-control/general-information/about-the-chat-control-bot',
            '_blank',
        );
    };

    return (
        <div onClick={handleButtonClick} className={styles.wrapper}>
            <div className={styles.rectangle1} />
            <div className={styles.rectangle2} />
            <div className={styles.rectangle3} />
            <div className={styles.buttonWithIcon}>
                <Arrow mainColor="#fff" />
            </div>
            <div className={styles.title}>
                {t('chatInfo.documentationBlock.title.part1')} <br className={styles.mobile} />{' '}
                {t('chatInfo.documentationBlock.title.part2')}
            </div>
        </div>
    );
}
