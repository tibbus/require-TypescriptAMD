///<reference path="../references/references.ts" />

import Backbone = require('backbone');
import RectangleModel = require('RectangleModel');

class RectangleView extends Backbone.View<RectangleModel> {

    constructor(model: RectangleModel, options?: any) {
        super(options);
        this.model = model;
    }
     
    public render(): RectangleView {
        this.setDimensions();
        this.setPosition();
        this.setColor();
        this.move();
        return this;
    }

    public setDimensions(): void {
        this.$el.css({
            width: this.model.get('width') + 'px',
            height: this.model.get('height') + 'px'
        })
    }

    public setPosition(): void {
        var position = this.model.get('position');
        this.$el.css({
            left: position.x,
            top: position.y,
            position: 'relative'
        })
    }

    public setColor(): void {
        this.$el.css('background-color', this.model.get('color'));
    }

    public move(): void {
        console.log('click');
        this.$el.css('left', this.$el.position().left + 10);
    }
}

export = RectangleView;