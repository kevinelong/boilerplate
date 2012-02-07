define([
  'jquery',
  'underscore',
  'backbone',
  'collections/pages',
  'text!templates/pages/list.html'
], function($, _, Backbone, collection, template) {
  var view = Backbone.View.extend({
    el: $('#content'),

    initialize: function() {
      _.bindAll(this, 'render', 'get');

      this.collection = collection;
      this.collection.on('reset', this.render);
    },

    get: function() {
      this.collection.reset([
        {title: 'My Page'}
      ]);
    },

    render: function() {
      var data = {
        _: _,
        pages: this.collection.models
      };
      this.$el.html(_.template(template, data));
    }
  });

  return new view;
});
