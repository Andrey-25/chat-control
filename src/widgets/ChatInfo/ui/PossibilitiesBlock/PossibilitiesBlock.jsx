import styles from './PossibilitiesBlock.module.css';
import { Button } from '../../../../shared/ui/Button/Button';
import { Arrow } from '../../../../shared/ui/Icon/Arrow';

export function PossibilitiesBlock() {
    const handleButtonClick = () => {
        window.open('https://chats-organization.gitbook.io/chat-control/for-content-creators', '_blank');
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.bigCircle} />
            <div className={styles.smallCircle} />
            <div className={styles.description}>
                Планирование, создание <br className={styles.mobile} /> команд,
                <br className={styles.desktop} />
                управление <br className={styles.mobile} /> участниками и постами сразу <br />в нескольких чатах
            </div>

            <div className={styles.buttonWithIcon}>
                <Button icon={<Arrow />} onClick={handleButtonClick} variant={'icon'} />
            </div>
            <div className={styles.title}>Возможности бота</div>
        </div>
    );
}
