import PropTypes from 'prop-types';

import styles from './MessengerBlock.module.css';


export function MessengerBlock({link, img}) {
    return (
        <div className={styles.wrapper}>
            <a href={link} className={styles.messenger}>
                {img}
            </a>
        </div>
    )
}

MessengerBlock.propTypes = {
    href: PropTypes.string,
    img: PropTypes.element,
};

MessengerBlock.defaultProps = {
    href: undefined,

};