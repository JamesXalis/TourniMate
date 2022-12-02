// import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import "./tournaments.css"
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_COURSES } from '../../utils/queries';
import { REGISTER_TOURNAMENT } from '../../utils/mutations';
import Auth from '../../utils/auth'



const Tournaments = () => {
const { Tournaments } = useParams()
  const { loading, data } = useQuery(QUERY_COURSES);
  const [ registerTournament, { error } ] = useMutation(REGISTER_TOURNAMENT)
  
  // if data isn't here yet, say so
  if (loading) {

    return <h2>LOADING...</h2>;
  } 
 
    const courseData = data.courses.find((tourney) => tourney._id === Tournaments).tournaments || [];
 
    const handleRegisterTournament = async(tournamentToSave) => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return false;
      }
console.log(tournamentToSave)
      try {
        const response = await registerTournament({
          variables: {_id: tournamentToSave},
        })
        window.location.reload();
      } catch (err) {
        console.error(err)
      }
    };

  return (
    <div className='Tournaments'>
<Jumbotron fluid className='text-light '>
        <Container>
          <h1 className='d-flex justify-content-center'>Here are the tournaments available!</h1>
        </Container>
      </Jumbotron>
      <Container className="mx-auto my-auto">
        <CardColumns className="card-columns my-auto ">
          {courseData.map((tournament) => {
            return (
              <Card key={tournament._id} className='Card '>
                {tournament.tournamentImage ? <Card.Img className='img-fluid'src={tournament.tournamentImage} alt={`${tournament.tournamentName}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title className='title'>{tournament.tournamentName}</Card.Title>
                  <Card.Text>{tournament.tournamentDescription}</Card.Text>
                  <Card.Text>${tournament.tournamentPrice} USD/Player</Card.Text>
                  {Auth.loggedIn() ? (
                    <Button className="btn-danger text-center" onClick={() => handleRegisterTournament(tournament._id)}>Save this tournament</Button>
                  ) : (
                    <Button className="btn-danger text-center">Login/Signup to save tournament</Button>
                  )}
                  <Card.Text>{tournament.tournamentDate}</Card.Text>
                  {Auth.loggedIn() ? (
                    <a className="btn-block btn-danger text-center" href={tournament.link} target="_blank">
                    Click here to register!</a>
                  ) : (
                    <a className="btn-block btn-danger text-center">
                    Login/Signup to pay for this tournament</a>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
     </div>
  )
}

export default Tournaments