import DS from "ember-data";
import { notEmpty } from "@ember/object/computed";
const { Model } = DS;

export default Model.extend({
  date: DS.attr("date"),

  speaker: DS.belongsTo("speaker"),
  book: DS.belongsTo("book"),

  bookRating: DS.attr("number"),
  video: DS.attr("string"),
  presentation: DS.attr("string"),
  review: DS.attr("string"),

  hasVideo: notEmpty("video"),
  hasPresentation: notEmpty("presentation")
});
