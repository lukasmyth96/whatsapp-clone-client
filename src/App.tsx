import React from 'react';

import ChatNavBar from './components/ChatNavBar';
import ChatList from './components/ChatList';

const App: React.FC = () => (
  <div>
    <ChatNavBar />
    <ChatList />
  </div>
);

export default App;
