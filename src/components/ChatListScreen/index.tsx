import React from 'react';

import ChatNavBar from './ChatNavBar';
import ChatList from './ChatList';

const ChatListScreen: React.FC = (props) => (
  <div>
    <ChatNavBar />
    <ChatList />
  </div>
);

export default ChatListScreen;
