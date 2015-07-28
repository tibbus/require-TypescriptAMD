///<reference path="../references/references.ts" />
'use strict';
import React = require('react');
import CompleteReactComponent = require('CompleteReactComponent');


interface Props {
    
}

class SimpleReactComponent extends React.Component<Props, void> {
    render(): React.ReactElement {
        return (
            <div className="test">
                <h1>Some string Content </h1>
                <CompleteReactComponent
                    content="some Content"
                    cssClassName="someClassName"    
                />
            </div>
            );
    }
}

export = SimpleReactComponent;


