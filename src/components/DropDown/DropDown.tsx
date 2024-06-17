import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { MenuIcon } from '../icons';
import Button from '../Button/Button';
import Text from '../Texts/Text';
import classNames from 'classnames';

interface DropDownProps {
  toggleReadUnread?: (type: string) => void;
  unreadCount?: number;
  onDeleteChat?: () => void;
}
export default function DropDown({
  toggleReadUnread = () => {},
  unreadCount,
  onDeleteChat = () => {},
}: DropDownProps) {
  const [readStatus, setReadStatus] = useState<string>(
    unreadCount === 0 ? 'unread' : 'read'
  );

  function onReadUnreadClick() {
    toggleReadUnread(readStatus);
    setReadStatus((prevState) =>
      prevState === 'read' ? 'unread' : 'read'
    );
  }

  return (
    <div>
      <Menu>
        <MenuButton
          as="div"
          className="relative inline-flex items-center justify-center w-5 h-5 hover:bg-light-gray"
        >
          <MenuIcon />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems className="absolute right-2 w-[160px] h-[108px] rounded-[10px] shadow-lg bg-white py-2 z-20 focus:outline-none">
            <MenuItem>
              {({ focus }) => {
                return (
                  <Button
                    className={classNames(
                      'w-full h-8 py-2 px-4 !justify-start hover:bg-light-gray',
                      focus && 'bg-light-gray'
                    )}
                    onClick={onReadUnreadClick}
                  >
                    <Text variant="black-one">
                      Mark as {readStatus}
                    </Text>
                  </Button>
                );
              }}
            </MenuItem>

            <MenuItem>
              {({ focus }) => {
                return (
                  <Button
                    className={classNames(
                      'w-full h-8 py-2 px-4 !justify-start hover:bg-light-gray',
                      focus && 'bg-light-gray'
                    )}
                    onClick={onDeleteChat}
                  >
                    <Text variant="black-one">Delete</Text>
                  </Button>
                );
              }}
            </MenuItem>

            <MenuItem>
              {({ focus }) => {
                return (
                  <Button
                    className={classNames(
                      'w-full h-8 py-2 px-4 !justify-start hover:bg-light-gray',
                      focus && 'bg-light-gray'
                    )}
                  >
                    <Text variant="black-one">Cancel</Text>
                  </Button>
                );
              }}
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
