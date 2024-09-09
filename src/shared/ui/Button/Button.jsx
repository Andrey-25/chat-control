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
            <span>{icon}</span>
            <div className={styles.descr}>{children}</div>
        </button>
    );
}

Button.propTypes = {
    icon: PropTypes.element,
    variant: PropTypes.oneOf(['primary', 'secondary']),
};
