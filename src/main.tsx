import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Application } from 'application/app';

export function bootstrap(mountNode: Element) {
    ReactDOM.render(<Application/>, mountNode);
}