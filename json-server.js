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
      image: faker.image.nature(),
      link: faker.internet.url()
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

      speaker: speakers[number],
      book: books[number]
    };
  });

  return {
    books: books,
    speakers: speakers,
    reports: reports
  };
};
