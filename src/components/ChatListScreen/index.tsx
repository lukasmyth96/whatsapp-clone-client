import React from 'react';
import styled from 'styled-components';

import ChatNavBar from './ChatNavBar';
import ChatList from './ChatList';

const Container = styled.div`
  height: 100vh;
`;

const ChatListScreen: React.FC = (props) => (
  <Container>
    <ChatNavBar />
    <ChatList />
  </Container>
);

export default ChatListScreen;
