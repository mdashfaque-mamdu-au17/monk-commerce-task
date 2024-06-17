import Button from '../Button/Button';
import { SendIcon } from '../icons';

interface InputFieldProps {
  placeholderName?: string;
}
export default function InputField({
  placeholderName = '',
}: InputFieldProps) {
  return (
    <div className="relative w-full h-12 ">
      <label htmlFor="message" hidden></label>
      <input
        name="message"
        type="text"
        className="h-full w-full focus:outline-none border rounded-[69px] p-2 placeholder:text-gray-600 text-sm leading-[22px] border-gray-100"
        placeholder={`Message ${placeholderName}`}
      />
      <div className="absolute top-2 right-2">
        <Button className="!w-8 !h-8">
          <SendIcon />
        </Button>
      </div>
    </div>
  );
}
