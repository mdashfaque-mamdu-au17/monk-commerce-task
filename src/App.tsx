import { Heading, Text } from './components';

function App() {
  return (
    <>
      <div className="bg-green-300">Hello world</div>
      <Heading headingType="h1">Chats</Heading>
      <Heading headingType="h3" variant="medium">
        Josh California
      </Heading>

      <div className="mt-10">
        <Text variant="gray">I think top two are:</Text>
        <Text variant="black-one">Mark as unread</Text>
        <Text variant="black-two">Click here for contact info</Text>
        <Text variant="black-three">
          Morning! It was pretty good. Went hiking on Saturday. You?
        </Text>
      </div>
    </>
  );
}

export default App;
