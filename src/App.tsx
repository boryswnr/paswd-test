import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { authContext } from "./lib/Contexts";
import { sha512 } from "js-sha512";

function App() {
    const [count, setCount] = useState(0);
    const [auth, setAuth] = useState(false);
    const [paswd, setPaswd] = useState("");
    const [hash, setHash] = useState("");

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        if (hash == import.meta.env.VITE_HASH) setAuth(true);
        setPaswd("");
    }

    useEffect(() => {
        setHash(sha512(paswd));
    }, [paswd]);

    if (!auth) {
        return (
            <>
                <h1>Please Login</h1>
                <form>
                    <input
                        type="password"
                        placeholder="type 'abcde' to access website"
                        onChange={(e) => setPaswd(e.target.value)}
                        value={paswd || ""}
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
            <button onClick={() => setAuth(false)}>Logout</button>
        </div>
    );
}

export default App;
