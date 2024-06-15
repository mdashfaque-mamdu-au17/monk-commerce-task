import classNames from 'classnames';
import Text from '../Texts/Text';

interface MessageBoxProps {
  variant?: 'sent' | 'received';
  message: string;
  time: string;
  className?: string;
}

export default function MessageBox({
  variant = 'sent',
  message = '',
  time = '',
  className = '',
}: MessageBoxProps) {
  function applyVariantStyles() {
    switch (variant) {
      case 'sent':
        return 'bg-light-yellow hover:bg-light-yellow/80';
      case 'received':
        return 'bg-cream-white hover:bg-cream-white/80';
      default:
        return '';
        break;
    }
  }

  const timeStyle =
    variant === 'sent' ? 'justify-end' : 'justify-start';

  return (
    <div
      className={classNames(
        'w-full p-4 rounded-[44px] transition-all duration-300',
        applyVariantStyles(),
        className
      )}
    >
      <Text variant="black-three">{message}</Text>
      <div className={classNames('mt-2.5 flex', timeStyle)}>
        <Text
          variant="gray"
          className="!-tracking-[0.3px] !text-black/40"
        >
          {time}
        </Text>
      </div>
    </div>
  );
}
