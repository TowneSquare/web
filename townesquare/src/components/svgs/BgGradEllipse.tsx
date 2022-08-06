
const BgGradEllipse = () => {
    return (
        <svg width="1703" height="1244" viewBox="0 0 1703 1244" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_0_4)">
                <ellipse cx="851.5" cy="622" rx="601.5" ry="372" fill="url(#paint0_linear_0_4)"/>
                <ellipse cx="851.5" cy="622" rx="601.5" ry="372" fill="black" fillOpacity="0.2"/>
            </g>
            <defs>
                <filter id="filter0_f_0_4" x="0" y="0" width="1703" height="1244" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_0_4"/>
                </filter>
                <linearGradient id="paint0_linear_0_4" x1="250" y1="250" x2="915.656" y2="1326.32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0368FF"/>
                    <stop offset="1" stopColor="#FF3E95"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default BgGradEllipse