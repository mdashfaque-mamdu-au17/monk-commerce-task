import { useState } from 'react';
import classNames from 'classnames';
import Text from '../Texts/Text';
import Heading from '../Texts/Heading';
import { CallIcon, MenuIcon, VideoCallIcon } from '../icons';
import OnlineTag from '../OnlineTag/OnlineTag';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import DropDown from '../DropDown/DropDown';

interface ProfileProps {
  variant?: 'in-list' | 'in-message';
  userId?: string;
  profilePicture?: string;
  name?: string;
  lastMessage?: string;
  unreadCount?: number;
  isActive?: boolean;
  isOnline?: boolean;
  deleteChat?: (userId: string) => void;
  className?: string;
}

export default function Profile({
  variant = 'in-list',
  userId = '',
  profilePicture = '',
  name = '',
  lastMessage = '',
  unreadCount = 0,
  isActive = false,
  isOnline = false,
  deleteChat = () => {},
  className = '',
}: ProfileProps) {
  const [unreadCountState, setUnreadCountState] =
    useState<number>(unreadCount);

  let profileComp;

  function clearUnreadCount() {
    setUnreadCountState(0);
  }

  function toggleReadUnread(type: string) {
    if (type === 'read') {
      clearUnreadCount();
    }
    if (type === 'unread') {
      setUnreadCountState(unreadCount);
    }
  }

  function onDeleteChat() {
    deleteChat(userId);
  }

  if (variant === 'in-list') {
    profileComp = (
      <div
        className={classNames(
          'p-2 rounded hover:bg-light-gray transition-all duration-300 flex justify-between gap-4 cursor-pointer',
          isActive && 'bg-light-gray',
          className
        )}
      >
        <Link
          className="flex items-center flex-1 gap-2"
          to={`message/${userId}`}
          onClick={clearUnreadCount}
        >
          <div className={classNames('w-12 h-12 relative')}>
            <img
              src={profilePicture}
              alt={`${name} picture`}
              className="w-full h-full rounded-full object-fit"
            />
            {isOnline && (
              <div className="absolute top-[34px] left-[34px]">
                <OnlineTag />
              </div>
            )}
          </div>
          <div className="flex justify-between flex-1">
            <div className="self-center">
              <Heading headingType="h3" variant="medium">
                {name}
              </Heading>

              <Text variant="gray">{lastMessage}</Text>
            </div>

            <div className="flex flex-col gap-2">
              <div className="lg:hidden">
                <Text variant="gray">11/19/19</Text>
              </div>
              <div className="hidden lg:block lg:h-5 lg:w-5"></div>
              {unreadCountState > 0 && (
                <div className="self-end">
                  <div className="w-5 h-5 text-white rounded-full bg-primary-green text-xs leading-[14px] -tracking-[0.15px] font-normal flex items-center justify-center pt-0.5">
                    {String(unreadCountState)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Link>

        <div className="relative flex items-center self-center justify-center w-5 h-5">
          <DropDown
            toggleReadUnread={toggleReadUnread}
            unreadCount={unreadCountState}
            onDeleteChat={onDeleteChat}
          />
        </div>
      </div>
    );
  }

  if (variant === 'in-message') {
    profileComp = (
      <article
        className={classNames(
          'pt-6 px-5 bg-gray-300 transition-all duration-300 lg:pt-3.5 lg:pb-3.5 lg:pl-[41px] lg:pr-[18.5px] lg:rounded-xl',
          className
        )}
      >
        <div className="flex justify-between h-[60px] lg:h-[49px]">
          <div className="flex items-center gap-2">
            <div className={classNames('w-10 h-10')}>
              <img
                src={profilePicture}
                alt={`${name} picture`}
                className="w-full h-full rounded-full object-fit"
              />
            </div>

            <div className="">
              <div className="flex items-center gap-2">
                <Heading
                  headingType="h3"
                  variant="medium"
                  className="!font-bold"
                >
                  {name}
                </Heading>

                {isOnline && <OnlineTag variant="small" />}
              </div>
              <Button>
                <Text variant="black-two">
                  Click here for contact info
                </Text>
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-4 pt-1.5 lg:pt-0 lg:items-center">
            <Button>
              <VideoCallIcon />
            </Button>
            <Button>
              <CallIcon />
            </Button>
            <Button>
              <MenuIcon />
            </Button>
          </div>
        </div>
      </article>
    );
  }

  return profileComp;
}
