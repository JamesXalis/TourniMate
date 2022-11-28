const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }
  type User {
    _id: ID
    username: String
    email: String
    tournamets: [Tournament]!
  }

  type Course {
    _id: ID
    courseName: String
    courseImage: String
    courseDescription: String
    par: Int
    tournamets: [Tournament]!
  }

  type Tournament {
    _id: ID
    tournametName: String
    tournametDescription: String
    tournamentImage: String
    tournamentDate: String
    course: Course
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    courses(_id: ID, courseName: String, courseImage: String, courseDescription: String, par: Int, tournaments: [Tournament]!): [Course]
    tournaments(_id: ID, tournametName: String, tournamentDescription: String, tournamentImage: String, tournamentDate: String): [Tournament]
  }

  type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        registerTournament(_id: ID, tournametName: String, tournamentDescription: String, tournamentImage: String): User
    }
`;

module.exports = typeDefs