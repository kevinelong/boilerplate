define([
  'jquery',
  'underscore',
  'backbone',
  'models/page'
], function($, _, Backbone, model) {
  var collection = Backbone.Collection.extend({
    model: model
  });

  return new collection;
});