import { gql } from '@apollo/client';

export const QUERY_ME = gql `
    {
        me {
            _id
            username
            email
            tournaments {
                tournamentName
                tournamentDate
                tournamentDescription
                tournamentImage
                course
                price
            }
        }
    }
`

export const QUERY_COURSES = gql `
    {
        courses {
            _id
            courseName
            courseImage
            courseDescription
            par
            tournaments {
                tournamentName
                tournamentDate
                tournamentDescription
                tournamentImage
                course
                price
            }
        }
    }
`

export const QUERY_TOURNAMENTS = gql `
    {
        tournaments {
            _id
            tournamentName
            tournamentDate
            tournamentDescription
            tournamentImage
            course
            price
        }
    }
`