import { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import './profile.css';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
// import Auth from '../../utils/auth';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME)
  
  // if data isn't here yet, say so
  if (loading) {
      return <h2>LOADING...</h2>;
    }
    const tourneyData = data?.me.tournaments || {};
    const userData = data?.me || [];

  return (
    <div className='Background'>
      <Jumbotron fluid className='text-light' id='background'>
        <Container>
          <h1 className='d-flex justify-content-center'>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2 className='Header d-flex justify-content-center'>
          {tourneyData.length
            ? `Viewing ${tourneyData.length} saved ${tourneyData.length === 1 ? 'tournament' : 'tournaments'}:`
            : 'You have no upcoming tournaments!'}
        </h2>
        <CardColumns>
          {userData.map((user) => {
            return (
              <Card key={user._id} border='dark'>
                {user.tournamentImage ? <Card.Img src={user.tournamentImage} alt={`The cover for ${user.tournamentName}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{user.tournamentName}</Card.Title>
                  <Card.Text>{user.tournamentDescription}</Card.Text>

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
