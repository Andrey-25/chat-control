import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export function Button({ children, icon = null, variant = 'primary', ...props }) {
    return (
        <button
            className={cn(styles.basis, {
                [styles.primary]: variant === 'primary',
                [styles.secondary]: variant === 'secondary',
            })}
            {...props}
        >
            <div className={styles.wrapper}>
                <div className={styles.descr}>{children}</div>
                <span>{icon}</span>
            </div>
        </button>
    );
}

Button.propTypes = {
    icon: PropTypes.element,
    variant: PropTypes.oneOf(['primary', 'secondary']),
};
