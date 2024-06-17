import classNames from 'classnames';

interface OnlineTagProps {
  variant?: 'small' | 'medium';
}

function OnlineTag({ variant = 'medium' }: OnlineTagProps) {
  function applyVariantStyle() {
    switch (variant) {
      case 'medium':
        return 'w-3 h-3';
      case 'small':
        return 'w-2 h-2';
      default:
        break;
    }
  }
  return (
    <div
      className={classNames(
        'rounded-full bg-primary-green',
        applyVariantStyle()
      )}
    ></div>
  );
}

export default OnlineTag;
