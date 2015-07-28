///<reference path="../references/references.ts" />
'use strict';
import RectangleModel = require('RectangleModel');
import RectangleView = require('RectangleView');
import Bar = require('Bar');
import React = require('react');
import SimpleReactComponent = require('SimpleReactComponent');

class Main {
    
    public static start(): void {

        var rectangleModel = new RectangleModel({   
            width: 200,
            height: 200,
            position: {
                x: 250,
                y: 336
            },
            color: 'red'
        });

        var rectangleView = new RectangleView(rectangleModel, {
            className: 'rectangle',
            tagName: 'div',
            events: {
                click: 'move'
            }
        });

        // Inject the Backbone View to DOM ::
        $('div#canvas').append(rectangleView.render().el);

        var childBar: Bar.ChildBar = new Bar.ChildBar();
        // setter :
        childBar.bar = 5;
        // getter :
        var barValue = childBar.bar;

        // generic number --> return number
        var stringValue: string = childBar.doSomething('a string');
        // generic string --> return string
        var numberValue: number = childBar.doSomething(5);
          
        // simple React Component
        React.render(
            <SimpleReactComponent />,
            document.getElementById('test')
        );

    }
}

export = Main;