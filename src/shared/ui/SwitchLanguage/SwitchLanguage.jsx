import { useTranslation } from 'react-i18next';

import styles from './SwitchLanguage.module.css';

export function SwitchLanguage() {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className={styles.container}>
            <button
                onClick={() => {
                    changeLanguage('ru');
                }}
                className={styles.btn}
            >
                Ru
            </button>
            <button
                onClick={() => {
                    changeLanguage('en');
                }}
                className={styles.btn}
            >
                En
            </button>
        </div>
    );
}
