const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    courses(_id: ID, courseName: String, courseImage: String, courseDescription: String, tournaments: [String]): [Course]
    tournaments(_id: ID, tournamentName: String, tournamentDescription: String, tournamentImage: String, tournamentDate: String, tournamentPrice: String, link: String, course: String): [Tournament]
  }

  type User {
    _id: ID
    username: String
    email: String
    tournaments: [Tournament]
  }

  type Course {
    _id: ID
    courseName: String
    courseImage: String
    courseDescription: String
    tournaments: [Tournament]
  }

  type Tournament {
    _id: ID
    tournamentName: String
    tournamentDescription: String
    tournamentImage: String
    tournamentDate: String
    tournamentPrice: String
    course: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String, email: String, password: String): Auth
        registerTournament(_id: ID): User
        removeTournament(_id: ID): User
    }
`;

module.exports = typeDefs