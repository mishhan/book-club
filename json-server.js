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
      image: faker.image.business(),
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
      bookRating: faker.random.number(),
      video: faker.internet.url(),
      presentation: faker.internet.url(),
      review: faker.lorem.paragraph(),

      speaker:
        speakers[Math.floor(Math.random() * (speakers.length - 1)) + 1].id,
      book: books[Math.floor(Math.random() * (books.length - 1)) + 1].id,
      meeting: meetings[Math.floor(Math.random() * (meetings.length - 1))].id
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
