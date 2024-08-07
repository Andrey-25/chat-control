import { MainBlock } from '../MainBlock/MainBlock';
import { PossibilitiesBlock } from '../PossibilitiesBlock/PossibilitiesBlock';
import { TeamBlock } from '../TeamBlock/TeamBlock';
import { MessengerBlocks } from '../MessengerBlocks/MessengerBlocks';
import { DocumentationBlock } from '../DocumentationBlock/Documentation';

import styles from './Info.module.css';

export function ChatInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <MainBlock />

                <div className={styles.aboutChatControl}>
                    <dvv className={styles.aboutWrapper}>
                        <PossibilitiesBlock />

                        <TeamBlock />
                    </dvv>


                    <div className={styles.resuourcesWrapper}>
                        <MessengerBlocks />

                        <DocumentationBlock />
                    </div>
                </div>

                <footer>
                    
                </footer>
            </div>
        </div>
    )
}