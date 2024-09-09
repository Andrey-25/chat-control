import { useTranslation } from 'react-i18next';

import styles from './PetProject.module.css';
import { Button } from '../../../../shared/ui/Button/Button.jsx';
import { Arrow } from '../../../../shared/ui/Icon/Arrow.jsx';

export function PetProject() {
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
                {t('navBar.petProject.description.part1')}
                <br />
                {t('navBar.petProject.description.part2')}
                <br />
                {t('navBar.petProject.description.part3')}
                <br />
                {t('navBar.petProject.description.part4')} <a href="#"> {t('navBar.petProject.description.link')}</a> 
                <br /> {t('navBar.petProject.description.part5')}
            </div>

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
