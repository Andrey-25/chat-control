import { Button } from '../../../../shared/ui/Button/Button';
import PaperAirplane from './../../../../shared/assets/icon/paper-airplane.svg';

import styles from './MainBlock.module.css';

export function MainBlock() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                административная панель chatcontrol
            </div>
            <h1 className={styles.subtitle}>
                Управление чатами <br/>
                Telegram <br/>
                на новом уровне <br/>
            </h1>
            <a href="https://t.me/itpmchat_bot" target="_blank">
                <Button 
                    children={'Добавить бота'} 
                    icon={<img src={PaperAirplane} alt='PaperAirplane'></img>} 
                    size={'big'}
                    variant={'primary'}
                    border={'borderBig'}
                    />     
            </a>
        </div>
    );
};