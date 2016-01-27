import React from "react";
import Page from "./page";

class Pages extends React.Component {
    render() {
        return (
            <div className="pages">
                {this.getPageComponents()}
            </div>
        );
    }

    getPageComponents() {
        return this.props.pages.map((page, key) => {
            return this.getPageComponent(page, key);
        });
    }

    getPageComponent(page, key) {
        return (
            <li key={key}>
                <Page {...page} />
            </li>
        );
    }
}

module.exports = Pages;
