/* eslint-disable no-undef */
module.exports = () => {
  const faker = require("faker");
  const _ = require("lodash");

  const speakers = _.times(10, number => {
    return {
      id: number,
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      position: faker.name.jobTitle(),
      avatar: faker.internet.avatar()
    };
  });

  const books = _.times(15, number => {
    return {
      id: number,
      name: faker.name.jobArea(),
      author: faker.name.findName(),
      pageCount: faker.random.number(),
      image: faker.image.technics(),
      link: faker.internet.url()
    };
  });

  const meetings = _.times(4, number => {
    return {
      id: number,
      date: faker.date.recent()
    };
  });

  const reports = _.times(8, number => {
    return {
      id: number,
      date: faker.date.recent(),
      bookRating: faker.random.number(100),
      video: faker.internet.url(),
      presentation: faker.internet.url(),
      review: faker.lorem.paragraph(),

      speaker: _.sample(speakers).id,
      book: _.sample(books).id,
      meeting: _.sample(meetings).id
    };
  });

  reports.forEach(report => {
    meetings[report.meeting].reports = meetings[report.meeting].reports || [];
    meetings[report.meeting].reports.push(report.id);

    books[report.book].reports = books[report.book].reports || [];
    books[report.book].reports.push(report.id);

    speakers[report.speaker].reports = speakers[report.speaker].reports || [];
    speakers[report.speaker].reports.push(report.id);
  });

  return {
    books: books,
    speakers: speakers,
    reports: reports,
    meetings: meetings
  };
};
