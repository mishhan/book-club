import DS from "ember-data";
import { notEmpty } from "@ember/object/computed";
const { Model } = DS;

export default Model.extend({
  name: DS.attr("string"),
  author: DS.attr("string"),
  pageCount: DS.attr("number"),
  image: DS.attr("string"),
  link: DS.attr("string"),

  hasLink: notEmpty("link"),

  reports: DS.hasMany("report")
});
