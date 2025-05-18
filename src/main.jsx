import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ Fix for GitHub Pages SPA routing
const redirectPath = sessionStorage.getItem("redirect");
if (redirectPath) {
    sessionStorage.removeItem("redirect");
    window.history.replaceState(null, "", redirectPath);
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
