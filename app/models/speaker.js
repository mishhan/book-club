import DS from "ember-data";
import { computed } from "@ember/object";
const { Model } = DS;

export default Model.extend({
  name: DS.attr("string"),
  surname: DS.attr("string"),
  position: DS.attr("string"),
  avatar: DS.attr("string"),

  reports: DS.hasMany("report"),

  hasReports: computed.notEmpty("reports"),
  fullName: computed("name", "surname", function() {
    return `${this.surname} ${this.name}`;
  })
});
