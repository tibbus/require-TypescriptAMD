///<reference path="../references/references.ts" />
'use strict';
import React = require('react');


interface Props {
    content: string;
    cssClassName: string;
}

interface State {
    display: boolean;
}

class CompleteReactComponent extends React.Component<Props, State> {

    public state: State = {
        display: true
    }

    public render(): React.ReactElement {

        if (this.state.display) {
            return (
                <div className={ this.props.cssClassName } onClick= { this.hideComponent.bind(this) } >
                    <h1>{ this.props.content } </h1>
                </div>
            );
        } else {
            return null;
        }

    }

    public hideComponent(): void {
        this.setState({
            display: false
        });
    }

    public componentWillMount(): void {
        console.log('React component will mount, be ready !!');
    }

    public componentDidMount(): void {
        console.log('React component is MOUNTED  !!!!');
    }

    public componentWillUnmount(): void {
        console.log('React component will be removed  !!');
    }

    public componentWillReceiveProps(): void {
        console.log('React component will receive some properties  !!');
    }

    public componentWillUpdate(): void {
        console.log('React component will update and trigger render  !!');
    }

    public componentDidUpdate(): void {
        console.log('React component was updated  !!');
    }

}

export = CompleteReactComponent;


