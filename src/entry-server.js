import React from "react";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export const render = (url) => {
    const html = (
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    );
    return { html };
};
