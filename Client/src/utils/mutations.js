import { gql } from '@apollo/client';

export const ADD_COURSE = gql`
    mutation addProfile($name: String!) {
        addCOURSE(name: $name) {
            _id
            CourseName
            CourseDescription
            courseImage
            par
        }
    }
`

export const ADD_TOURNAMENT = gql`
    mutation addTournament($name: String!, $course: String!) {
        addTournament(name: $name, course: $course) {
            _id
            tournamentName
            tournamentDate
            tournamentDescription
            tournamentDescription
            course
        }
    }
`