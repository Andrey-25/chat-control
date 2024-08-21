import { Button } from '../../../../shared/ui/Button/Button';

import styles from './MainBlock.module.css';
import { Link } from 'react-router-dom';
import { AirPlaneIcon } from '../../../../shared/ui/Icon/AirPlane.jsx';
import BigTgImg from '../../../../shared/assets/icon/big-bg-tg.svg';
import LitleTgImgs from '../../../../shared/assets/icon/little-bg-tg.svg';

export function MainBlock() {
    return (
        <div className={styles.wrapper}>
            <div>
                <p className={styles.title}>административная панель ChatControl</p>
                <h1 className={styles.subtitle}>
                    Управление <br className={styles.mobile} /> чатами <br />
                    Telegram <br />
                    на новом уровне <br />
                </h1>
            </div>
            <img src={BigTgImg} alt="big telegram icon" className={styles.bigTgImg} />
            <img src={LitleTgImgs} alt="small telegram icons" className={styles.litlleTgImgs} />

            <Link to={'https://t.me/itpmchat_bot'}>
                <Button children={'Добавить бота'} icon={<AirPlaneIcon />} variant={'primary'} />
            </Link>
        </div>
    );
}
