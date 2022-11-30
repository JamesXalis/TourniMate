const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    courses(_id: ID, courseName: String, courseImage: String, courseDescription: String, tournaments: [String]): [Course]
    tournaments(_id: ID, tournamentName: String, tournamentDescription: String, tournamentImage: String, tournamentDate: String, tournamentPrice: String): [Tournament]
  }

  type User {
    _id: ID
    username: String
    email: String
    tournamets: [Tournament]
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
    courseName: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String, email: String, password: String): Auth
        registerTournament(_id: ID, tournametName: String, tournamentDescription: String, tournamentImage: String): User
    }
`;

module.exports = typeDefs