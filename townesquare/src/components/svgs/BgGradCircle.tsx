const BgGradCircle = () => {
    return (
        <svg width="1514" height="1514" viewBox="0 0 1514 1514" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_4_2)">
            <circle cx="757" cy="757" r="372" fill="url(#paint0_linear_4_2)"/>
            <circle cx="757" cy="757" r="372" fill="black" fillOpacity="0.2"/>
            </g>
            <defs>
            <filter id="filter0_f_4_2" x="0" y="0" width="1514" height="1514" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="192.5" result="effect1_foregroundBlur_4_2"/>
            </filter>
            <linearGradient id="paint0_linear_4_2" x1="385" y1="385" x2="1129" y2="1129" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0368FF"/>
            <stop offset="1" stopColor="#FF3E95"/>
            </linearGradient>
            </defs>
        </svg>
    )
}

export default BgGradCircle;