define([
  'jquery',
  'underscore',
  'backbone',
  'views/pages/list'
], function($, _, Backbone, pages) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'default_action'
    },

    default_action: function(actions) {
      pages.get();
    }
  });

  var initialize = function() {
    var app_router = new AppRouter;
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
