import PropTypes from 'prop-types';

import styles from './MessengerBlock.module.css';

export function MessengerBlock({ link, img }) {
    return (
        <a href={link} className={styles.wrapper} target="_blank" rel="noreferrer">
            <div className={styles.messenger}>
                <img src={img} alt="img" />
            </div>
        </a>
    );
}

MessengerBlock.propTypes = {
    link: PropTypes.string,
    img: PropTypes.string,
};
