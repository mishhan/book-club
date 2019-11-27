import DS from "ember-data";
import { computed } from "@ember/object";
const { Model } = DS;

export default Model.extend({
  date: DS.attr("date"),
  reports: DS.hasMany("report"),

  isConducted: computed("date", function() {
    const currentDate = new Date();
    return currentDate > this.date;
  })
});
