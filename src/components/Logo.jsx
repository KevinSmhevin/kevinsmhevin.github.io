const Logo = ({ className }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Kevin Paras"
    className={className}
  >
    <defs>
      <linearGradient id="kp-logo-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1e3a8a" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#kp-logo-bg)" />
    <polyline
      points="18,24 25,32 18,40"
      fill="none"
      stroke="#93c5fd"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x="39"
      y="39"
      textAnchor="middle"
      fontFamily="'JetBrains Mono', ui-monospace, monospace"
      fontSize="19"
      fontWeight="700"
      fill="#ffffff"
      letterSpacing="0.5"
    >
      KP
    </text>
  </svg>
);

export default Logo;
