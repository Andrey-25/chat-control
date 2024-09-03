import styles from './TeamBlock.module.css';
import { Arrow } from '../../../../shared/ui/Icon/Arrow.jsx';
import { PersonAvatar } from '../../../../shared/ui/Avatar/PersonAvatar';
import { Button } from '../../../../shared/ui/Button/Button';
import person from '../../../../shared/assets/icon/Ellipse 46.png';

export function TeamBlock() {
    const teamPhotos = [person, person, person, person, person, person, person, person];
    const handleButtonClick = () => {
        window.open('https://chats-organization.gitbook.io/chat-control/our-team', '_blank');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonWithIcon}>
                <Button icon={<Arrow />} onClick={handleButtonClick} variant={'icon'} />
            </div>
            <div className={styles.team}>
                {teamPhotos.map((photo, index) => (
                    <PersonAvatar key={index} photo={photo} />
                ))}
                <div className={styles.circle}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className={styles.dot} />
                    ))}
                </div>
            </div>
            <p>Команда</p>
        </div>
    );
}
