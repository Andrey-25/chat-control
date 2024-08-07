// import PropTypes from 'prop-types';

import { ProjectLogo } from '../../../../shared/ui/ProjectLogo/ProjectLogo.jsx';
import { SwitchLanguage } from '../../../../shared/ui/SwitchLanguage/SwitchLanguage.jsx';
import { Button } from '../../../../shared/ui/Button/Button.jsx';

import logo from '../../../../shared/assets/icon/MainLogo.png';
import styles from './Header.module.css';
import PaperAirplane from './../../../../shared/assets/icon/paper-airplane.svg';


export function ChatHeader() {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <a href="https://t.me/itpmchat_bot" target="_blank">
                        <ProjectLogo logo={<img src={logo} alt="logo" />}/>
                    </a>
                    <div className={styles.innerWrapper}>
                        <div>
                            <SwitchLanguage />
                        </div>
                        <div>
                            <a href="https://t.me/itpmchat_bot" target="_blank">
                                <Button 
                                    children={'Добавить бота'} 
                                    icon={<img className={styles.airplane}src={PaperAirplane} alt='PaperAirplane' />} 
                                    size={'medium'}
                                    variant={'secondary'}
                                    border={'borderMedium'}
                                    />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

