import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

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

                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
      {/* <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Courses</h1>
            <p className="lead text-muted">Here you can find the list of golf Courses. Click on the image that you are interested in to learn more.</p>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">

            <div className="card-group">
              <div className="card">
                <img src="#" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>

          </div>
        </div>
        </div>
      </main> */}

    </>
  )
}

export default Courses