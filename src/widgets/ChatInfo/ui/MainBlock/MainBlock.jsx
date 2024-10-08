import { AirPlaneIcon } from '../../../../shared/ui/Icon/AirPlane.jsx';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../../shared/ui/Button/Button';

import styles from './MainBlock.module.css';
import BigTgImg from '../../../../shared/assets/icon/big-bg-tg.svg';
import LitleTgImgs from '../../../../shared/assets/icon/little-bg-tg.svg';

export function MainBlock() {
    const { t } = useTranslation();

    const handleButtonClick = () => {
        window.open('https://t.me/ITPM_dev_main_bot', '_blank');
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <p className={styles.title}>{t('chatInfo.mainBlock.title')}</p>
                <h1 className={styles.subtitle}>
                    {t('chatInfo.mainBlock.subtitle.part1')} <br className={styles.mobile} />{' '}
                    {t('chatInfo.mainBlock.subtitle.part2')} <br />
                    {t('chatInfo.mainBlock.subtitle.part3')} <br />
                    {t('chatInfo.mainBlock.subtitle.part4')}
                    <br />
                </h1>
            </div>
            <img src={BigTgImg} alt="big telegram icon" className={styles.bigTgImg} />
            <img src={LitleTgImgs} alt="small telegram icons" className={styles.litlleTgImgs} />

            <Button
                children={t('chatInfo.mainBlock.btn')}
                icon={<AirPlaneIcon mainColor="#fff" />}
                variant={'primary'}
                onClick={handleButtonClick}
            />
        </div>
    );
}
