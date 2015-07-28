'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react', 'CompleteReactComponent'], function (require, exports, React, CompleteReactComponent) {
    var SimpleReactComponent = (function (_super) {
        __extends(SimpleReactComponent, _super);
        function SimpleReactComponent() {
            _super.apply(this, arguments);
        }
        SimpleReactComponent.prototype.render = function () {
            return (React.createElement(
                "div",
                {
                    className: "test"
                },
                React.createElement("h1", null, "Some string Content " ),
                React.createElement(
                    CompleteReactComponent,
                    {
                        content: "some Content",
                        cssClassName: "someClassName"
                    }
                )
            ));
        };
        return SimpleReactComponent;
    })(React.Component);
    return SimpleReactComponent;
});
//# sourceMappingURL=SimpleReactComponent.js.map