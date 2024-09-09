import { Link } from 'react-router-dom';
import { AirPlaneIcon } from '../../../../shared/ui/Icon/AirPlane.jsx';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../../shared/ui/Button/Button';

import styles from './MainBlock.module.css';
import BigTgImg from '../../../../shared/assets/icon/big-bg-tg.svg';
import LitleTgImgs from '../../../../shared/assets/icon/little-bg-tg.svg';

export function MainBlock() {
    const { t } = useTranslation();
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

            <Link to={'https://t.me/itpmchat_bot'}>
                <Button children={t('chatInfo.mainBlock.btn')} icon={<AirPlaneIcon />} variant={'primary'} />
            </Link>
        </div>
    );
}
