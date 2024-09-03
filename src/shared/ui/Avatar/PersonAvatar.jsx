import styles from './PersonAvatar.module.css'

export function PersonAvatar( {photo}) {
    return (
        <div className={styles.avatar} >
            <img  src={photo} alt={'person'}/>
        </div>
    )
}
