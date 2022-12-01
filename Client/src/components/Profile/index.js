import { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import './profile.css';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME)
  
  // if data isn't here yet, say so
  if (loading) {
      return <h2>LOADING...</h2>;
    }
    const userData = data?.me.tournaments || [];
    

  return (
    <div className='Tournaments'>
      <Jumbotron fluid className='text-light' id='background'>
        <Container>
          <h1 className='d-flex justify-content-center'>Viewing your saved tournaments!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2 className='d-flex justify-content-center'>
          {userData.length
            ? `Viewing ${userData.length} saved ${userData.length === 1 ? 'tournament' : 'tournaments'}:`
            : 'You have no upcoming tournaments!'}
        </h2>
        <CardColumns className='card-columns my-auto'>
          {userData.map((user) => {
            return (
              <Card key={user._id} className="Card">
                {user.tournamentImage ? <Card.Img className='img-fluid' src={user.tournamentImage} alt={`The cover for ${user.tournamentName}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title className="title">{user.tournamentName}</Card.Title>
                  <Card.Text>{user.tournamentDescription}</Card.Text>
                  <Card.Text>Date: {user.tournamentDate}</Card.Text>
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
