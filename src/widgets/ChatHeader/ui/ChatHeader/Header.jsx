import { ProjectLogo } from '../../../../shared/ui/ProjectLogo/ProjectLogo.jsx';
import { SwitchLanguage } from '../../../../shared/ui/SwitchLanguage/SwitchLanguage.jsx';
import { Button } from '../../../../shared/ui/Button/Button.jsx';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.css';
import { AirPlaneIcon } from '../../../../shared/ui/Icon/AirPlane.jsx';

export function ChatHeader() {
    const { t } = useTranslation();

    const handleButtonClick = () => {
        window.open('https://t.me/itpmchat_bot', '_blank');
    };

    return (
        <header>
            <div className={styles.container}>
                <ProjectLogo />
                <div className={styles.innerWrapper}>
                    <SwitchLanguage />
                    <Button
                        children={t('header.btn')}
                        icon={<AirPlaneIcon mainColor="#111" />}
                        variant={'secondary'}
                        onClick={handleButtonClick}
                    />
                </div>
            </div>
        </header>
    );
}
