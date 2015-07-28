var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone'], function (require, exports, Backbone) {
    var RectangleView = (function (_super) {
        __extends(RectangleView, _super);
        function RectangleView(model, options) {
            _super.call(this, options);
            this.model = model;
        }
        RectangleView.prototype.render = function () {
            this.setDimensions();
            this.setPosition();
            this.setColor();
            this.move();
            return this;
        };
        RectangleView.prototype.setDimensions = function () {
            this.$el.css({
                width: this.model.get('width') + 'px',
                height: this.model.get('height') + 'px'
            });
        };
        RectangleView.prototype.setPosition = function () {
            var position = this.model.get('position');
            this.$el.css({
                left: position.x,
                top: position.y,
                position: 'relative'
            });
        };
        RectangleView.prototype.setColor = function () {
            this.$el.css('background-color', this.model.get('color'));
        };
        RectangleView.prototype.move = function () {
            console.log('click');
            this.$el.css('left', this.$el.position().left + 10);
        };
        return RectangleView;
    })(Backbone.View);
    return RectangleView;
});
//# sourceMappingURL=RectangleView.js.map