import classNames from 'classnames';
import React from 'react';

interface TextProps {
  textType?: 'p' | 'span';
  variant?: 'gray' | 'black-one' | 'black-two' | 'black-three';
  children: React.ReactNode;
  className?: string;
}

export default function Text({
  textType = 'p',
  variant,
  children,
  className,
}: TextProps) {
  const TextTag = textType;

  function applyVariantStyles() {
    switch (variant) {
      case 'gray':
        return 'font-normal text-sm leading-[17px] -tracking-[0.15px] text-primary-gray';
      case 'black-one':
        return 'font-normal text-[13px] leading-5 text-black-500';
      case 'black-two':
        return 'text-sm leading-[22px] font-normal text-secondary-black';
      case 'black-three':
        return 'text-base font-normal leading-[19px] -tracking-[0.3px] text-black';
      default:
        return '';
        break;
    }
  }

  return (
    <TextTag
      className={classNames('', applyVariantStyles(), className)}
    >
      {children}
    </TextTag>
  );
}
