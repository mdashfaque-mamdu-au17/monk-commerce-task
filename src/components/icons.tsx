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

export function LeftArrowIcon({ className }: IconProps) {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.78033 0.46967C6.07322 0.762563 6.07322 1.23744 5.78033 1.53033L2.31066 5L5.78033 8.46967C6.07322 8.76256 6.07322 9.23744 5.78033 9.53033C5.48744 9.82322 5.01256 9.82322 4.71967 9.53033L0.719669 5.53033C0.426776 5.23744 0.426777 4.76256 0.719669 4.46967L4.71967 0.46967C5.01256 0.176777 5.48744 0.176777 5.78033 0.46967Z"
        fill="#4A4A4A"
      />
    </svg>
  );
}

export function CallIcon({ className }: IconProps) {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.68028 4.4567L6.87416 1.40414C6.06982 0.0446848 4.31571 -0.405316 2.95626 0.399035C2.71318 0.542861 2.49274 0.721901 2.30212 0.930326C0.945494 2.4137 0.338215 3.82605 0.537902 5.16529C0.94713 7.90983 2.87669 11.0447 6.30482 14.6037L6.60254 14.8978L6.89707 15.1959L6.90287 15.1916C10.4561 18.624 13.5909 20.5536 16.3354 20.9628C17.6747 21.1625 19.087 20.5552 20.5704 19.1986C20.7788 19.008 20.9579 18.7876 21.1017 18.5445C21.906 17.185 21.456 15.4309 20.0966 14.6266L17.044 12.8205L16.8922 12.7378C16.1736 12.3796 15.3183 12.4036 14.6174 12.8109L13.6662 13.3635L13.5557 13.4209C13.0692 13.6443 12.4887 13.5448 12.104 13.1601L8.34067 9.39675L8.25696 9.30463C7.91634 8.8915 7.86384 8.30493 8.13719 7.83449L8.68987 6.88334C9.12622 6.13237 9.12255 5.20419 8.68028 4.4567ZM19.7606 18.3131C18.5056 19.4609 17.4296 19.9127 16.5124 19.7759C14.1553 19.4245 11.3405 17.7373 8.08688 14.6632L7.52665 14.1257L7.14818 13.75C3.88348 10.3601 2.08853 7.42787 1.72478 4.98832C1.58803 4.07117 2.03988 2.99517 3.18764 1.74018C3.29828 1.6192 3.42623 1.51528 3.56732 1.4318C4.31255 0.990867 5.26211 1.19935 5.75861 1.8886L5.8414 2.0152L7.64751 5.06776C7.86854 5.44131 7.87037 5.90517 7.6523 6.28046L7.09963 7.23162C6.57511 8.13431 6.66991 9.2661 7.33109 10.068L7.45251 10.2037L11.2555 14.0086C11.9937 14.7468 13.112 14.9451 14.0565 14.5114L14.2188 14.4288L15.2203 13.8484C15.5694 13.6456 15.9968 13.6323 16.3569 13.8118L16.4705 13.8745L19.4855 15.6593C20.2746 16.1262 20.5358 17.1443 20.0689 17.9334C19.9855 18.0745 19.8815 18.2025 19.7606 18.3131Z"
        fill="#007AFF"
      />
    </svg>
  );
}

export function VideoCallIcon({ className }: IconProps) {
  return (
    <svg
      width="25"
      height="17"
      viewBox="0 0 25 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.0007 4.75C17.0007 2.54086 15.2099 0.75 13.0007 0.75H4.00073C1.79159 0.75 0.000732422 2.54086 0.000732422 4.75V12.25C0.000732422 14.4591 1.79159 16.25 4.00073 16.25H13.0007C15.2099 16.25 17.0007 14.4591 17.0007 12.25V4.75ZM4.00073 1.95H13.0007C14.5471 1.95 15.8007 3.2036 15.8007 4.75V12.25C15.8007 13.7964 14.5471 15.05 13.0007 15.05H4.00073C2.45434 15.05 1.20073 13.7964 1.20073 12.25V4.75C1.20073 3.2036 2.45434 1.95 4.00073 1.95ZM24.2934 2.67115C24.4278 2.84596 24.5007 3.06032 24.5007 3.28086V13.4604C24.5007 14.0127 24.053 14.4604 23.5007 14.4604C23.3157 14.4604 23.1342 14.4091 22.9766 14.3121L18.9525 11.8357C18.361 11.4717 18.0007 10.8269 18.0007 10.1324V7.2348C18.0007 6.61386 18.2891 6.02815 18.7813 5.64956L22.891 2.48824C23.3288 2.1515 23.9566 2.2334 24.2934 2.67115ZM19.513 6.6007L23.3007 3.68704V13.1025L19.5815 10.8137C19.3449 10.6681 19.2007 10.4102 19.2007 10.1324V7.2348C19.2007 6.98643 19.3161 6.75214 19.513 6.6007Z"
        fill="#007AFF"
      />
    </svg>
  );
}

export function SendIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.481867 0.000464222C0.329963 0.00615648 0.188882 0.0804907 0.098364 0.202705C0.00795705 0.324807 -0.0220641 0.481512 0.0169976 0.628381L1.68304 6.87295L9.03995 7.999L1.68419 9.12405L0.0171404 15.3703C-0.0164554 15.4952 -0.000271176 15.6284 0.0622311 15.7415C0.124845 15.8548 0.228756 15.9395 0.352416 15.9777C0.47597 16.0159 0.60957 16.0047 0.725089 15.9465L15.7258 8.44613C15.8368 8.39032 15.923 8.29534 15.9677 8.17937C16.0125 8.06352 16.0125 7.93517 15.9677 7.8193C15.923 7.70345 15.8368 7.60835 15.7258 7.55255L0.725089 0.0522123C0.649752 0.0147106 0.566042 -0.00303594 0.481999 0.00042422L0.481867 0.000464222Z"
        fill="#888888"
      />
    </svg>
  );
}

export function AttachIcon({ className }: IconProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.42127 12V0H6.57873V12H5.42127ZM0 6.5832V5.4168H12V6.5832H0Z"
        fill="#888888"
      />
    </svg>
  );
}

export function VoiceIcon({ className }: IconProps) {
  return (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.06241 7.31245C5.6592 7.31245 6.23141 7.07546 6.65336 6.65339C7.0754 6.23145 7.31242 5.65927 7.31242 5.06245V2.24994C7.31242 1.4461 6.88355 0.703361 6.18748 0.301441C5.49129 -0.10048 4.63357 -0.10048 3.93738 0.301441C3.24131 0.703361 2.81244 1.44613 2.81244 2.24994V5.06245C2.81244 5.65924 3.04943 6.23145 3.4715 6.65339C3.89345 7.07543 4.46559 7.31245 5.06241 7.31245ZM3.93734 2.24994C3.93734 1.84802 4.15184 1.47657 4.49988 1.27567C4.84803 1.07465 5.27677 1.07465 5.62495 1.27567C5.973 1.47657 6.18748 1.84802 6.18748 2.24994V5.06245C6.18748 5.46437 5.97299 5.83582 5.62495 6.03671C5.2768 6.23774 4.84806 6.23774 4.49988 6.03671C4.15183 5.83582 3.93734 5.46437 3.93734 5.06245V2.24994Z"
        fill="#888888"
      />
      <path
        d="M4.49991 9.90565V12H5.62498V9.90565C6.86239 9.76728 8.0055 9.17768 8.83563 8.24972C9.66589 7.32163 10.1248 6.12018 10.125 4.87505V4.50008H9.00003V4.87505C9.00003 6.28184 8.24956 7.58175 7.03124 8.28521C5.81292 8.98847 4.31198 8.98847 3.09373 8.28521C1.87541 7.58182 1.12494 6.2819 1.12494 4.87505V4.50008H0V4.87505C0.000130815 6.12028 0.459075 7.32173 1.28933 8.24972C2.11946 9.17768 3.26251 9.76727 4.49991 9.90565Z"
        fill="#888888"
      />
    </svg>
  );
}
