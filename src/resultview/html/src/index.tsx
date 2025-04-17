import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App";
import { Api } from "./api";

const api = new Api();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <App api={api} />
);
