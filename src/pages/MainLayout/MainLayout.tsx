import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Heading, Profile } from '../../components';
import { data } from '../../utils/data';
import { getFirstProperty } from '../../utils/helpfunction';

interface ChatMessage {
  message: string;
  timeStamp: string;
}

interface UserChat {
  userId: string;
  name: string;
  unreadCount: number;
  profilePictureURL: string;
  chat: Array<Record<string, ChatMessage>>;
}

export default function MainLayout() {
  const [allData, setAllData] = useState<UserChat[]>(data);
  const { id } = useParams();
  console.log(id, 'params here');
  function deleteChat(userId: string) {
    const updatedData = allData.filter(
      (user) => user.userId !== userId
    );
    setAllData(updatedData);
  }
  return (
    <div className="relative flex">
      <div className="hidden lg:block min-w-[364px] max-w-[364px] h-screen border-r border-gray-200">
        <nav className="px-2 py-4">
          <Heading headingType="h1">Chats</Heading>
        </nav>

        <section className="flex flex-col gap-4 px-2">
          {allData.length === 0 && (
            <div className="flex items-center justify-center">
              <Heading variant="medium">No Messages Found</Heading>
            </div>
          )}
          {allData.length > 0 &&
            allData?.map((user, index) => {
              const lastChat = user?.chat[user?.chat.length - 1];
              const lastMessage = getFirstProperty(lastChat)?.message;
              return (
                <Profile
                  key={user?.userId}
                  userId={user?.userId}
                  name={user?.name}
                  profilePicture={user?.profilePictureURL}
                  lastMessage={lastMessage}
                  unreadCount={user?.unreadCount}
                  isOnline={index === 0}
                  deleteChat={deleteChat}
                  isActive={id ? id === user?.userId : false}
                />
              );
            })}
        </section>
      </div>
      <Outlet />
    </div>
  );
}
