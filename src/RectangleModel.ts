///<reference path="../references/references.ts" />

import Backbone = require('backbone');

class RectangleModel extends Backbone.Model {

    constructor(modelAttrs: props) {
        super();
        this.set(modelAttrs);
    }

    public validate(attrs): any {
        var validColors: string[] = ['white', 'red', 'blue', 'yellow', 'green'];
        var colorIsValid = function (attrs) {
            if (!attrs.color) {
                return true;
            }
            return _(validColors).include(attrs.color);
        }
        if (!colorIsValid(attrs)) {
            return 'color must be one of:' + validColors.join(',');
        }
    }
}

interface props {
    width: number;
    height: number;
    position: Object;
    color: string;
}

export = RectangleModel;