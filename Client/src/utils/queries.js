import { gql } from '@apollo/client';

export const QUERY_ME = gql `
    {
        me {
            _id
            username
            email
            tournaments {
                _id
                tournamentName
                tournamentDate
                tournamentDescription
                tournamentImage
                course
                tournamentPrice
                link
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
            tournaments {
                _id
                tournamentName
                tournamentDate
                tournamentDescription
                tournamentImage
                tournamentPrice
                course
                link
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
            tournamentPrice
            link
        }
    }
`