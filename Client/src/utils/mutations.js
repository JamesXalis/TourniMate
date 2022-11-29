import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                tournaments {
                    _id
                    tournamentName
                    tournamentDescription
                    tournamentDate
                    course
                    price
                }
        }
    }
}`;

export const REGISTER_TOURNAMENT = gql`
    mutation registerTournament($tournamentName: String!, $tournamentDate: String!, $tournamentDescription: String!, $tournamentImage: string, $course: Schema.Types.ObjectId, $price: Number) {
        registerTournament(tournamentName: $tournamentName, tournamentDate: $tournamentDate, tournamentDescription: $tournamentDescription, tournamentImage: $tournamentImage, course: $course, price: $price){
            _id
            username
            email
            tournaments {
                    _id
                    tournamentName
                    tournamentDescription
                    tournamentDate
                    course
                    price
                }
        }
    }
`;
export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                tournaments {
                    _id
                    tournamentName
                    tournamentDescription
                    tournamentDate
                    course
                    price
                }
            }
        }
    }
`