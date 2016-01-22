import * as React from "react";
import { inc } from "core/utils";

export class Application extends React.Component<{},{}> {
    onClick = () => {
        alert("A");
    }
    render() {
        return <div>
            Application #{inc(0)}
            <button onClick={this.onClick}>Click</button>
        </div>
    }
}