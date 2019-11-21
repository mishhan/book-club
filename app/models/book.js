import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({

  name: DS.attr('string'),
  author: DS.attr('string'),
  pageCount: DS.attr('number'),
  image: DS.attr('string'),
  link: DS.attr('string')
});
