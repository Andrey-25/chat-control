import styles from './Founders.module.css';

export function Founders() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.descr}>
            Этот проект задумал <a href='#'>Человек Человекович </a> — гений,<br/> 
            миллиардер, плейбой, филантроп.<br/>
            Он занимается этим и этим и вон тем, и прибрал к<br/>
            себе в лапки нас, беспризорников
            </div>

            <h2 className={styles.header}>
                Основатели
            </h2>
        </div>
    )
}