requirejs.config({
    baseUrl: 'dist/src',
    paths: {
        app: 'src',
        backbone: '../../bower_components/backbone/backbone',
        underscore: '../../bower_components/underscore/underscore',
        jquery: '../../bower_components/jquery/dist/jquery',
        react: '../../bower_components/react/react'
    },
    shim: {
    	underscore: {
    		exports: '_'
    	}
    },
    backbone: {
    	deps: ['underscore', 'jquery'],
    	exports: 'Backbone'
    }
});

require(['Main'], function (Main) {
    Main.start();
});