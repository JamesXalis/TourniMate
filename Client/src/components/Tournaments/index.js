import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, CardColumns, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'

import { useQuery } from '@apollo/client'
import { QUERY_COURSES } from '../../utils/queries';



const Tournaments = () => {
const { Tournaments } = useParams()
  const { loading, data } = useQuery(QUERY_COURSES);
  
  // if data isn't here yet, say so
  if (loading) {

    return <h2>LOADING...</h2>;
  } 
 
    const courseData = data.courses.find((tourney) => tourney._id === Tournaments).tournaments || [];
    console.log(courseData)
 
  return (
    <>

<Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Here are the tournaments available!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
            Tournaments:
        </h2>
        <CardColumns>
          {courseData.map((tournament) => {
            return (
              <Card key={tournament._id} border='dark'>
                {tournament.tournamentImage ? <Card.Img src={tournament.tournamentImage} alt={`${tournament.tournamentName}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{tournament.tournamentName}</Card.Title>
                  <Card.Text>{tournament.tournamentDescription}</Card.Text>
                  <Card.Text>${tournament.tournamentPrice}.00 USD/Player</Card.Text>
                  <Card.Text>{tournament.tournamentDate}</Card.Text>
                  <Link className='btn-block btn-danger text-center'>
                    Click here to pay
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  )
}

export default Tournaments