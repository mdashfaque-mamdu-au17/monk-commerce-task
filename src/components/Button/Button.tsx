import classNames from 'classnames';
import React from 'react';

interface ButtonProps {
  variant?: 'normal' | 'rounded';
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export default function Button({
  variant = 'normal',
  className = '',
  type = 'button',
  onClick = () => {},
  children,
}: ButtonProps) {
  function applyVariantStyle() {
    switch (variant) {
      case 'normal':
        return 'min-w-5';
      case 'rounded':
        return 'w-8 h-8 border rounded-full border-gray-500 hover:bg-light-gray';
      default:
        break;
    }
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        'flex items-center justify-center transition-all duration-300',
        applyVariantStyle(),
        className
      )}
    >
      {children}
    </button>
  );
}
