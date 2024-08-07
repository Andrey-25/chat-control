import { ChatHeader } from "../../../../widgets/ChatHeader/index.js";
import { ChatInfo } from "../../../../widgets/ChatInfo/index.js";
import { NavBar } from "../../../../widgets/NavBar/index.js";

import styles from './MainPage.module.css';

export function MainPage() {
    return (
        <div className={styles.container}>
            <ChatHeader />
            <ChatInfo />
            <NavBar />
        </div>
    )
}