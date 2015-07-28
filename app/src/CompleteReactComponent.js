'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react'], function (require, exports, React) {
    var CompleteReactComponent = (function (_super) {
        __extends(CompleteReactComponent, _super);
        function CompleteReactComponent() {
            _super.apply(this, arguments);
            this.state = {
                display: true
            };
        }
        CompleteReactComponent.prototype.render = function () {
            if (this.state.display) {
                return (React.createElement(
                    "div",
                    {
                        className: this.props.cssClassName,
                        onClick: this.hideComponent.bind(this)
                    },
                    React.createElement("h1", null, this.props.content, " " )
                ));
            }
            else {
                return null;
            }
        };
        CompleteReactComponent.prototype.hideComponent = function () {
            this.setState({
                display: false
            });
        };
        CompleteReactComponent.prototype.componentWillMount = function () {
            console.log('React component will mount, be ready !!');
        };
        CompleteReactComponent.prototype.componentDidMount = function () {
            console.log('React component is MOUNTED  !!!!');
        };
        CompleteReactComponent.prototype.componentWillUnmount = function () {
            console.log('React component will be removed  !!');
        };
        CompleteReactComponent.prototype.componentWillReceiveProps = function () {
            console.log('React component will receive some properties  !!');
        };
        CompleteReactComponent.prototype.componentWillUpdate = function () {
            console.log('React component will update and trigger render  !!');
        };
        CompleteReactComponent.prototype.componentDidUpdate = function () {
            console.log('React component was updated  !!');
        };
        return CompleteReactComponent;
    })(React.Component);
    return CompleteReactComponent;
});
//# sourceMappingURL=CompleteReactComponent.js.map