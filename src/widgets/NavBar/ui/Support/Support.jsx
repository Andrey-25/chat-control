import { useTranslation } from 'react-i18next';

import styles from './Support.module.css';
import { Arrow } from '../../../../shared/ui/Icon/Arrow';
import { Button } from '../../../../shared/ui/Button/Button.jsx';
import { StarIcon } from '../../../../shared/ui/Icon/StarIcon.jsx';

export function Support() {
    const { t } = useTranslation();

    const handleButtonClick = () => {
        window.open('https://chats-organization.gitbook.io/chat-control/general-information/about-the-project');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonWithIcon}>
                <Button icon={<Arrow mainColor="#111" />} onClick={handleButtonClick} variant={'icon'} />
            </div>

            <div className={styles.descr}>
                {t('navBar.support.description.part1')} <a href="#">{t('navBar.support.description.link')}</a> —{' '}
                {t('navBar.support.description.part2')},
                <br className={styles.mobile} />
                {t('navBar.support.description.part3')} <br className={styles.mobile} />
                <br className={styles.desktop} />
                {t('navBar.support.description.part4')} <br className={styles.mobile} />
                {t('navBar.support.description.part5')} <br className={styles.desktop} />
                {t('navBar.support.description.part6')}
            </div>

            <div className={styles.innerWrapper}>
                <a
                    href="https://chats-organization.gitbook.io/chat-control/general-information/about-the-project"
                    className={styles.messenger}
                    target="_blank"
                    rel="noreferrer"
                >
                    <h2 className={styles.header}>{t('navBar.support.title')}</h2>
                </a>
                <div className={styles.imgWrapper}>
                    {/* {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon className={`styles.star${i}`} />
                    ))} */}
                    <StarIcon className={styles.star1} />
                    <StarIcon className={styles.star2} />
                    <StarIcon className={styles.star3} />
                    <StarIcon className={styles.star4} />
                    <StarIcon className={styles.star5} />
                </div>
            </div>
        </div>
    );
}
