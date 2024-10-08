export function StarIcon({ mainColor }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill={mainColor}>
            <g filter="url(#filter0_b_672_1689)">
                <path
                    d="M4.17917 19.3455C4.15776 19.6727 4.48847 19.9078 4.79045 19.7801L10.2729 17.4611C10.3817 17.4151 10.5044 17.4146 10.6135 17.4599L16.2276 19.7909C16.5266 19.9151 16.853 19.6851 16.8365 19.3617L16.5172 13.0812C16.5113 12.9651 16.5515 12.8515 16.629 12.7649L20.6966 8.22193C20.9168 7.97602 20.7983 7.58425 20.4788 7.50152L14.5538 5.96755C14.4452 5.93944 14.3514 5.87097 14.2916 5.77611L10.8274 0.284806C10.6516 0.00625049 10.2436 0.0119535 10.0757 0.295311L6.83317 5.76839C6.77417 5.86797 6.67836 5.94033 6.56644 5.96984L0.810726 7.48741C0.482015 7.57408 0.371137 7.9846 0.611514 8.22497L3.55454 11.168C3.652 11.2655 3.78945 11.3117 3.92599 11.293L10.479 10.3935C10.9685 10.3263 11.1807 10.9922 10.7426 11.2207L4.7176 14.3626C4.58117 14.4338 4.49174 14.571 4.48168 14.7245L4.17917 19.3455Z"
                    fill={mainColor}
                />
            </g>
            <defs>
                <filter
                    id="filter0_b_672_1689"
                    x="-3.92363"
                    y="-4.32653"
                    width="29.1386"
                    height="28.5575"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.2029" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_672_1689" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_672_1689" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}
