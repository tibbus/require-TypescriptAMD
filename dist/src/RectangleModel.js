var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone'], function (require, exports, Backbone) {
    var RectangleModel = (function (_super) {
        __extends(RectangleModel, _super);
        function RectangleModel(modelAttrs) {
            _super.call(this);
            this.set(modelAttrs);
        }
        RectangleModel.prototype.validate = function (attrs) {
            var validColors = ['white', 'red', 'blue', 'yellow', 'green'];
            var colorIsValid = function (attrs) {
                if (!attrs.color) {
                    return true;
                }
                return _(validColors).include(attrs.color);
            };
            if (!colorIsValid(attrs)) {
                return 'color must be one of:' + validColors.join(',');
            }
        };
        return RectangleModel;
    })(Backbone.Model);
    return RectangleModel;
});
//# sourceMappingURL=RectangleModel.js.map