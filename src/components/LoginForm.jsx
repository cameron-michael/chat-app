import { useState } from "react";
import axios from "axios";

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';


const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { "Project-ID":"2e25e1f0-67b8-4756-aab0-acbde6911e83", "User-name" : username, "User-Secret" : password };

        try {
           await axios.get("https://api.chatengine.io/chats", { headers: authObject });

           localStorage.setItem("username", username);
           localStorage.setItem("password", password);

           window.location.reload();
           setError("");

        } catch (error) {
            setError("Oops, incorrect credentials.");

            //error -> try with new username ...

        }

        // username | password => chatengine -> give messages
        // works out -> logged in
        // error -> try with new username ...
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Not Facebook</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>

        </div>
    );
};

export default LoginForm;