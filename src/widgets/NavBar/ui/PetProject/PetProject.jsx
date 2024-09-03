import styles from './PetProject.module.css';
import { Button } from '../../../../shared/ui/Button/Button.jsx';
import { Arrow } from '../../../../shared/ui/Icon/Arrow.jsx';

export function PetProject() {
    const handleButtonClick = () => {
        window.open('https://chats-organization.gitbook.io/chat-control/general-information/about-the-project');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonWithIcon}>
                <Button icon={<Arrow />} onClick={handleButtonClick} variant={'icon'} />
            </div>

            <div className={styles.descr}>
                Что такое пет проект. Все что есть выполнено на 
                <br />
                некоммерческой основе талантливыми людьми. Мы 
                <br />
                набираем опыт в процессе, хочешь к нам?
                <br />
                Подпишись на  <a href="#">этого человека</a> <br />и следи за вакансиями
            </div>

            <a
                href="https://chats-organization.gitbook.io/chat-control/general-information/about-the-project"
                className={styles.messenger}
                target="_blank"
                rel="noreferrer"
            >
                <h2 className={styles.header}>Пет проект</h2>
            </a>
        </div>
    );
}
