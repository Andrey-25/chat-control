import { useTranslation } from 'react-i18next';

import styles from './PossibilitiesBlock.module.css';
import { Button } from '../../../../shared/ui/Button/Button';
import { Arrow } from '../../../../shared/ui/Icon/Arrow';

export function PossibilitiesBlock() {
    const { t } = useTranslation();

    const handleButtonClick = () => {
        window.open('https://chats-organization.gitbook.io/chat-control/for-content-creators', '_blank');
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.bigCircle} />
            <div className={styles.smallCircle} />
            <div className={styles.description}>
                {t('chatInfo.possibilitiesBlock.description.part1')} <br className={styles.mobile} />{' '}
                {t('chatInfo.possibilitiesBlock.description.part2')}
                <br className={styles.desktop} />
                {t('chatInfo.possibilitiesBlock.description.part3')} <br className={styles.mobile} />{' '}
                {t('chatInfo.possibilitiesBlock.description.part4')} <br />
                {t('chatInfo.possibilitiesBlock.description.part5')}
            </div>

            <div className={styles.buttonWithIcon}>
                <Button icon={<Arrow mainColor="#FFF" />} onClick={handleButtonClick} variant={'icon'} />
            </div>
            <div className={styles.title}>{t('chatInfo.possibilitiesBlock.title')}</div>
        </div>
    );
}
