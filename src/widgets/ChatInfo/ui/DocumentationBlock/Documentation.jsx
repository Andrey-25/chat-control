import styles from './Documentation.module.css';
import { Button } from '../../../../shared/ui/Button/Button';
import { Arrow } from '../../../../shared/ui/Icon/Arrow';

export function DocumentationBlock() {
    const handleButtonClick = () => {
        window.open(
            'https://chats-organization.gitbook.io/chat-control/general-information/about-the-chat-control-bot',
            '_blank',
        );
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.rectangle1} />
            <div className={styles.rectangle2} />
            <div className={styles.rectangle3} />
            <div className={styles.buttonWithIcon}>
                <Button icon={<Arrow />} onClick={handleButtonClick} variant={'icon'} />
            </div>
            <div className={styles.title}>
                Посмотреть <br className={styles.mobile} /> документацию
            </div>
        </div>
    );
}
