import { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import './profile.css';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { REMOVE_TOURNAMENT } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME)
  const [ removeTournament, { error }] = useMutation(REMOVE_TOURNAMENT)
  
  // if data isn't here yet, say so
  if (loading) {
      return <h2>LOADING...</h2>;
    }
    const userData = data?.me.tournaments || [];
    const meData = data?.me

    const handleRemoveTournament = async (tournamentToRemove) => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return false;
      }

      try {
        const { data } = await removeTournament({
          variables: { _id: tournamentToRemove}
        })
        console.log(tournamentToRemove)
        window.location.reload();

      } catch (err) {
        console.error(err)
      }
    }

  return (
    <div className='Tournaments'>
      <Jumbotron fluid className='text-light' id='background'>
        <Container>
          <h1 className='d-flex justify-content-center'>Hey {meData.username}, here's your saved tournaments!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2 className='d-flex justify-content-center'>
          {userData.length
            ? `You currently have ${userData.length} upcoming ${userData.length === 1 ? 'tournament' : 'tournaments'}:`
            : 'You have no upcoming tournaments!'}
        </h2>
        <CardColumns className='card-columns my-auto'>
          {userData.map((tournament) => {
            return (
              <Card key={tournament._id} className="Card">
                {tournament.tournamentImage ? <Card.Img className='img-fluid' src={tournament.tournamentImage} alt={`The cover for ${tournament.tournamentName}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title className="title">{tournament.tournamentName}</Card.Title>
                  <Card.Text>{tournament.tournamentDescription}</Card.Text>
                  <Card.Text>Date: {tournament.tournamentDate}</Card.Text>
                  <Card.Text>Good Luck!</Card.Text>
                  <Button className="btn-block btn-danger text-center" onClick={() => handleRemoveTournament(tournament._id)}>Remove this tournament</Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </div>
  );
};

export default Profile;
