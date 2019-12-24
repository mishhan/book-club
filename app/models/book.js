import DS from "ember-data";
import { computed } from "@ember/object";
const { Model } = DS;

export default Model.extend({
  name: DS.attr("string"),
  author: DS.attr("string"),
  pageCount: DS.attr("number"),
  image: DS.attr("string"),
  link: DS.attr("string"),

  hasImage: computed.notEmpty("image"),
  hasLink: computed.notEmpty("link"),
  hasReports: computed.notEmpty("reports"),

  reports: DS.hasMany("report", { async: false }),

  rating: computed("reports.[]", function() {
    let rating = 0;
    let count = 0;
    this.get("reports").forEach(report => {
      rating += report.get("bookRating");
      count += 1;
    });
    return count === 0 ? 0 : (rating / count).toFixed(2);
  }),

  scaledRating: computed('rating', function() {
    return Number(this.get('rating')) / 100;
  })
});
