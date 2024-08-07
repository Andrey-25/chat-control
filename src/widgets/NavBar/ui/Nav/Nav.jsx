import { PetProject } from '../PetProject/PetProject.jsx';
import { Founders } from '../Founders/Founders.jsx';
import { FAQ } from '../FAQ/FAQ.jsx';

import styles from './Nav.module.css';

export function NavBar() {
    return (
        <div className={styles.container}>
            <PetProject />
            <Founders />
            <FAQ />
        </div>
    );
}