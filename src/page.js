import React from "react";

class Page extends React.Component {
    render() {
        return (
            <div className="page">
                <h1>{this.props.title}</h1>
                {this.props.content}
            </div>
        );
    }
}

module.exports = Page;
