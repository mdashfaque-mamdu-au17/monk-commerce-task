import React from 'react';
import classNames from 'classnames';

interface HeadingProps {
  headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'large' | 'medium';
  children?: React.ReactNode;
  className?: string;
}

export default function Heading({
  headingType = 'h1',
  variant = 'large',
  children,
  className = '',
}: HeadingProps) {
  const HeadingTag = headingType;

  function applyVariantStyles() {
    switch (variant) {
      case 'large':
        return 'font-normal text-2xl leading-[22px] text-secondary-black';
        break;
      case 'medium':
        return 'text-base text-black leading-[21px] -tracking-[0.33px] font-semibold';
      default:
        return '';
        break;
    }
  }

  return (
    <HeadingTag
      className={classNames('', applyVariantStyles(), className)}
    >
      {children}
    </HeadingTag>
  );
}
