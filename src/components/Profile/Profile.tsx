import classNames from 'classnames';
import React from 'react';
import Text from '../Texts/Text';
import Heading from '../Texts/Heading';
import { MenuIcon } from '../icons';
import OnlineTag from '../OnlineTag/OnlineTag';

interface ProfileProps {
  variant?: 'in-list' | 'in-message';
  profilePicture?: string;
  name: string;
  lastMessage: string;
  unreadCount?: string;
  isActive?: boolean;
  isOnline?: boolean;
  className?: string;
}

export default function Profile({
  variant = 'in-list',
  profilePicture = '',
  name = '',
  lastMessage = '',
  unreadCount = '',
  isActive = false,
  isOnline = false,
  className = '',
}: ProfileProps) {
  let profileComp;

  if (variant === 'in-list') {
    profileComp = (
      <article
        className={classNames(
          'p-2 rounded transition-all duration-300 hover:bg-light-gray flex justify-between gap-4 cursor-pointer',
          isActive && 'bg-light-gray',
          className
        )}
      >
        <div className="flex items-center flex-1 gap-2">
          <div className={classNames('w-12 h-12 relative')}>
            <img
              src={profilePicture}
              alt=""
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
              <div className="self-end">
                <div className="w-5 h-5 text-white rounded-full bg-primary-green text-xs leading-[14px] -tracking-[0.15px] font-normal flex items-center justify-center">
                  {unreadCount}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center self-center justify-center w-5 h-5">
          <MenuIcon />
        </div>
      </article>
    );
  }

  return profileComp;
}
