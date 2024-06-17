import { useState } from 'react';
import { data } from '../../utils/data';
import { Button, Heading, Profile } from '../../components';
import { LeftArrowIcon } from '../../components/icons';
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

export default function MobileHome() {
  const [allData, setAllData] = useState<UserChat[]>(data);

  function deleteChat(userId: string) {
    const updatedData = allData.filter(
      (user) => user.userId !== userId
    );
    setAllData(updatedData);
  }

  return (
    <main className="lg:hidden">
      <nav className="flex items-center gap-4 px-2 pt-8 pb-4">
        <Button>
          <LeftArrowIcon className="w-4 h-4" />
        </Button>
        <Heading headingType="h1">Chats</Heading>
      </nav>

      <section className="flex flex-col gap-4 pl-2 pr-[22px]">
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
              />
            );
          })}
      </section>
    </main>
  );
}
