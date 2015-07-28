var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var Bar;
    (function (Bar) {
        var parentBar = (function () {
            function parentBar(val) {
                this.anotherBar = val;
            }
            Object.defineProperty(parentBar.prototype, "bar", {
                get: function () {
                    console.log('getter');
                    return this._bar;
                },
                set: function (value) {
                    console.log('setter');
                    this._bar = value;
                },
                enumerable: true,
                configurable: true
            });
            parentBar.prototype.doSomething = function (arg) {
                return arg;
            };
            return parentBar;
        })();
        var ChildBar = (function (_super) {
            __extends(ChildBar, _super);
            function ChildBar() {
                _super.call(this, 5);
            }
            return ChildBar;
        })(parentBar);
        Bar.ChildBar = ChildBar;
    })(Bar || (Bar = {}));
    return Bar;
});
//# sourceMappingURL=Bar.js.map