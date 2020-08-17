import React, { Component } from "react";
import Counter from "./pages/counter";
import User from "./pages/user";
export default class App extends Component {
    render() {
        return (
            <div>
                <Counter />
                <User />
            </div>
        );
    }
}
