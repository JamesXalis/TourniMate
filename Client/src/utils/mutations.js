import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String, $email: String, $password: String) {
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
                    tournamentPrice
                    link
                }
        }
    }
}`;

export const REGISTER_TOURNAMENT = gql`
    mutation registerTournament($_id: ID) {
        registerTournament(_id: $_id){
            _id
            username
            email
            tournaments {
                    _id
                    tournamentName
                    tournamentDescription
                    tournamentDate
                    course
                    tournamentPrice
                    link
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
                    tournamentPrice
                    link
                }
            }
        }
    }
`