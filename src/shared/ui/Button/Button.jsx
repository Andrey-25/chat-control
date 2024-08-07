import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

export function Button({children, icon, size, variant, border, ...props}) {
    return (
        <button
            className={cn(styles.basis, {
                [styles.big]: size === 'big',
                [styles.medium]: size === 'medium',
                [styles.primary]: variant === 'primary',
                [styles.secondary]: variant === 'secondary',
                [styles.borderMedium]: border === 'borderMedium',
                [styles.borderBig]: border === 'borderBig'
            })}
            {...props}
        >
            <div className={styles.descr}>
                {children}
            </div>
            {icon}
        </button>
    )
}

Button.propTypes = {
    icon: PropTypes.element,
    size: PropTypes.oneOf(['big', 'medium']),
    variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
    icon: undefined,
    size: 'big',
    variant: 'primary',
};
