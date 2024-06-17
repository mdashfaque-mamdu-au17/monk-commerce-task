import { useParams } from 'react-router-dom';
import { data } from '../../utils/data';
import {
  Button,
  Heading,
  InputField,
  MessageBox,
  Profile,
} from '../../components';
import classNames from 'classnames';
import { AttachIcon, VoiceIcon } from '../../components/icons';

interface message {
  message: string;
  timeStamp: string;
}

interface conversationProps {
  [key: string]: message;
}

export default function MessageDetails() {
  const { id } = useParams();
  const foundMessage = data?.find(
    (message) => message?.userId === id
  );
  return (
    <div className="relative w-full">
      {!foundMessage?.userId && id && (
        <div className="h-screen lg:[364px] flex justify-center items-center">
          <Heading variant="medium">No User Found</Heading>
        </div>
      )}

      {foundMessage?.userId && (
        <div className="fixed top-0 left-0 z-20 w-full bg-white custom-width lg:top-7 lg:left-[404px]">
          <Profile
            variant="in-message"
            userId={foundMessage?.userId}
            profilePicture={foundMessage?.profilePictureURL}
            name={foundMessage?.name}
            isOnline={foundMessage?.userId === 'user1'}
          />
        </div>
      )}

      {/* messages */}
      {foundMessage?.userId && (
        <div className="pt-[120px] pb-[80px] px-4 flex flex-col gap-2">
          {foundMessage?.chat?.map(
            (conversation: conversationProps, index: number) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  {Object.keys(conversation).map((key, index) => {
                    return (
                      <div
                        key={index}
                        className={classNames(
                          index === 0 ? 'self-start' : 'self-end',
                          'max-w-[80%] min-w-[200px]'
                        )}
                      >
                        <MessageBox
                          message={conversation[key]?.message}
                          time={conversation[key]?.timeStamp}
                          variant={index === 0 ? 'received' : 'sent'}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            }
          )}
        </div>
      )}

      {foundMessage?.userId && (
        <div className="fixed bottom-0 z-20 w-full pb-6 bg-white custom-message-width lg:left-[444px]">
          <div className="flex h-[50px] gap-4 px-4 w-full">
            <div className="flex items-center gap-2">
              <Button variant="rounded">
                <AttachIcon />
              </Button>
              <Button variant="rounded">
                <VoiceIcon />
              </Button>
            </div>
            <div className="flex-1">
              <InputField placeholderName={`${foundMessage?.name}`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
