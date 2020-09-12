import React from 'react';

import { chats } from '../../db';

const ChatList: React.FC = () => (
  <div>
    <ul>
      {chats.map((chat) => (
        <li key={chat.id}>
          <img src={chat.picture} alt="Profile" />
          <div>{chat.name}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default ChatList;
