import { PetProject } from '../PetProject/PetProject.jsx';
import { Support } from '../Support/Support.jsx';

import styles from './Nav.module.css';

export function NavBar() {
    return (
        <div className={styles.container}>
            <PetProject />
            <Support />
        </div>
    );
}