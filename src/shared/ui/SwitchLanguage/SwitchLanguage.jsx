import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './SwitchLanguage.module.css';

export function SwitchLanguage() {
    const [active, setActive] = useState(0);
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className={styles.container}>
            <button
                onClick={() => {
                    changeLanguage('ru');
                    setActive(0);
                }}
                className={`${styles.btn} ${active === 0 ? styles.active : ''}`}
            >
                Ru
            </button>
            <button
                onClick={() => {
                    changeLanguage('en');
                    setActive(1);
                }}
                className={`${styles.btn} ${active === 1 ? styles.active : ''}`}
            >
                En
            </button>
        </div>
    );
}
