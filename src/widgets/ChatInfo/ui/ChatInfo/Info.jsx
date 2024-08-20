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
                    <div className={styles.aboutWrapper}>
                        <PossibilitiesBlock />

                        <TeamBlock />
                    </div>

                    <div className={styles.resourcesWrapper}>
                        <MessengerBlocks />

                        <DocumentationBlock />
                    </div>
                </div>
            </div>
        </div>
    );
}
