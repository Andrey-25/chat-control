import { MessengerBlock } from '../../../../shared/ui/MessengerBlock/MessengerBlock';

import styles from './MessengerBlocks.module.css';
import Linkedin from '../../../../shared/assets/icon/linkedin-icon.png';
import Telegram from '../../../../shared/assets/icon/telegram-icon.png';

export function MessengerBlocks() {
    return (
        <div className={styles.wrapper}>
            <a href="https://t.me/chatcontrol " target="_blank">
                <MessengerBlock 
                    link={'#'} 
                    img={<img src={Linkedin} alt="linkedin" />}
                    />
            </a>
            <div className={styles.gap}>
                <a href="https://www.linkedin.com/company/chat-control/" target="_blank">
                    <MessengerBlock 
                        ink={'#'}
                        img={<img src={Telegram} alt="telegram" />}
                        />
                </a>
            </div>
        </div>
    )
};