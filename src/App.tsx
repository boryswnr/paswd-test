import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { authContext } from "./lib/Contexts";

function App() {
    const [count, setCount] = useState(0);
    const [auth, setAuth] = useState(false);
    const [paswd, setPaswd] = useState("");

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        if (paswd == "1234") setAuth(true);
        setPaswd("");
    }

    if (!auth) {
        return (
            <>
                <h1>Please Login</h1>
                <form>
                    <input
                        type="password"
                        placeholder="type '1234' to access website"
                        onChange={(e) => setPaswd(e.target.value)}
                    />
                    <br />
                    <br />
                    <button
                        type="submit"
                        onClick={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        {" "}
                        Submit
                    </button>
                </form>
            </>
        );
    }

    return (
        <div className="App">
            <h1>Website</h1>
        </div>
    );
}

export default App;