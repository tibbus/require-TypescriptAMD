'use strict';
define(["require", "exports", 'RectangleModel', 'RectangleView', 'Bar', 'react', 'SimpleReactComponent'], function (require, exports, RectangleModel, RectangleView, Bar, React, SimpleReactComponent) {
    var Main = (function () {
        function Main() {
        }
        Main.start = function () {
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
            $('div#canvas').append(rectangleView.render().el);
            var childBar = new Bar.ChildBar();
            childBar.bar = 5;
            var barValue = childBar.bar;
            var stringValue = childBar.doSomething('a string');
            var numberValue = childBar.doSomething(5);
            React.render(React.createElement(SimpleReactComponent, null), document.getElementById('test'));
        };
        return Main;
    })();
    return Main;
});
//# sourceMappingURL=Main.js.map