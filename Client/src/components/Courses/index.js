import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { useQuery } from '@apollo/client'
import { QUERY_COURSES } from '../../utils/queries'


const Courses = () => {

  const { loading, data } = useQuery(QUERY_COURSES)
  
  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  
  const courseData = data.courses || [];

  return (
    <>

<Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Here are the courses available!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
            Courses:
        </h2>
        <CardColumns>
          {courseData.map((course) => {
            return (
              <Card key={course._id} border='dark'>
                {course.courseImage ? <Card.Img src={course.courseImage} alt={`${course.courseName}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{course.courseName}</Card.Title>
                  <Card.Text>{course.courseDescription}</Card.Text>
                  <Link className='btn-block btn-danger text-center' to={`/Courses/${course._id}`}>
                    View Tournaments
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

export default Courses