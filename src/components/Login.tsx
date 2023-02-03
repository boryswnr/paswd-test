import { useState } from "react";

function Login() {
    const [paswd, setPaswd] = useState("");

    function handleSubmit() {}

    return (
        <>
            <h1>Please login</h1>
            <form>
                <input
                    type="password"
                    placeholder="type '1234' to access website"
                    onChange={(e) => setPaswd(e.target.value)}
                />
                <button type="submit" onClick={() => handleSubmit()}></button>
            </form>
        </>
    );
}
