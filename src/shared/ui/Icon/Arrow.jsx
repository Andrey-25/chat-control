import PropTypes from 'prop-types';

export function Arrow({ mainColor = '#171515', ...restProps }) {
    return (
        <svg
            width="20.140625"
            height="20.132812"
            viewBox="0 0 20.1406 20.1328"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                id="Vector"
                d="M17.64 4.25L2.08 19.79C1.85 20.02 1.56 20.13 1.21 20.13C0.86 20.12 0.57 20 0.34 19.77C0.11 19.54 0 19.26 0 18.91C0 18.57 0.11 18.28 0.34 18.05L15.88 2.5L2.22 2.5C1.86 2.5 1.57 2.38 1.33 2.14C1.09 1.9 0.97 1.6 0.97 1.24C0.97 0.89 1.09 0.59 1.33 0.35C1.57 0.11 1.86 0 2.22 0L18.63 0C19.06 0 19.41 0.14 19.7 0.43C19.99 0.72 20.14 1.07 20.14 1.5L20.14 17.91C20.14 18.27 20.02 18.56 19.78 18.8C19.54 19.04 19.24 19.16 18.89 19.16C18.53 19.16 18.23 19.04 18 18.8C17.75 18.56 17.64 18.27 17.64 17.91L17.64 4.25Z"
                fill={mainColor}
                fillOpacity="1.000000"
                fillRule="nonzero"
            />
        </svg>
    );
}

Arrow.propTypes = {
    mainColor: PropTypes.string,
};
