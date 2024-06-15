interface IconProps {
  className?: string;
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      width="4"
      height="14"
      viewBox="0 0 4 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.5 1.5C3.5 2.32843 2.82843 3 2 3C1.17157 3 0.5 2.32843 0.5 1.5C0.5 0.671573 1.17157 0 2 0C2.82843 0 3.5 0.671573 3.5 1.5Z"
        fill="#007AFF"
      />
      <path
        d="M3.5 7C3.5 7.82843 2.82843 8.5 2 8.5C1.17157 8.5 0.5 7.82843 0.5 7C0.5 6.17157 1.17157 5.5 2 5.5C2.82843 5.5 3.5 6.17157 3.5 7Z"
        fill="#007AFF"
      />
      <path
        d="M3.5 12.5C3.5 13.3284 2.82843 14 2 14C1.17157 14 0.5 13.3284 0.5 12.5C0.5 11.6716 1.17157 11 2 11C2.82843 11 3.5 11.6716 3.5 12.5Z"
        fill="#007AFF"
      />
    </svg>
  );
}
