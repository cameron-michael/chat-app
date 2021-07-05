import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
    if(!localStorage.getItem("username")) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="2e25e1f0-67b8-4756-aab0-acbde6911e83"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps} />}
        />
    );
}

export default App