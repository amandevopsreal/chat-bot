import './App.css';
import { Chatbot } from 'react-chatbot-kit'

import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';



function App() {
  return (
    <div className="App">
      <div style={{ width: "300px" }}>
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </div>
    </div>
  );
}

export default App;
