import React from "react";
import ReactDOMServer from "react-dom/server";

import Page from "./src/page";
import Pages from "./src/pages";

let pages = [
    {"title": "Home", "content": "This is the home page"},
    {"title": "Products", "content": "This is the products page"},
];

let rendered = ReactDOMServer.renderToString(
    <Pages pages={pages} />
);

import assert from "assert";

assert(
    rendered.match(/<h1 data-reactid=".*">Home<\/h1>/g)
);

import { createStore } from "redux";
import freeze from "deep-freeze";

const defaultState = freeze({
    "pages": [],
});

const reducer = (state = defaultState, action) => {
    if (action.type === "ADD_PAGE") {
        let pages = state.pages;

        pages = [
            ...pages,
            action.payload,
        ];
    }

    return {
        "pages": pages,
    };
};

let store = createStore(reducer);

store.dispatch({
    "type": "ADD_PAGE",
    "payload": {
        "title": "Home",
        "content": "A welcome message",
    },
});

let state = store.getState();

assert(
    state.pages.filter(page => page.title === "Home").length > 0
);
