import React from 'react';
import moment from 'moment';

import { chats } from '../../db';

const ChatList: React.FC = () => (
  <div>
    <ul>
      {chats.map((chat) => (
        <li key={chat.id}>
          <img src={chat.picture} alt="Profile" />
          <div>{chat.name}</div>
          {chat.lastMessage && (
            <>
              <div>{chat.lastMessage?.content}</div>
              <div>{moment(chat.lastMessage?.createdAt).format('HH:mm')}</div>
            </>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default ChatList;
