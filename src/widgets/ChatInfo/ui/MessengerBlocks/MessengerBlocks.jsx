import { MessengerBlock } from '../../../../shared/ui/MessengerBlock/MessengerBlock';

import styles from './MessengerBlocks.module.css';
import Linkedin from '../../../../shared/assets/icon/linkedin-icon.svg';
import Telegram from '../../../../shared/assets/icon/telegram-icon.svg';

export function MessengerBlocks() {
    return (
        <div className={styles.wrapper}>
            <MessengerBlock link={'https://t.me/chatcontrol"'} img={Linkedin} />
            <MessengerBlock link={'https://t.me/+9QjDVLYBDl5lNGYy'} img={Telegram} />
        </div>
    );
}
