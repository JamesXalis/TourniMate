import "bootstrap/dist/css/bootstrap.min.css";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./courses.css";
import { useQuery } from "@apollo/client";
import { QUERY_COURSES } from "../../utils/queries";

const Courses = () => {
  const { loading, data } = useQuery(QUERY_COURSES);

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const courseData = data.courses || [];

  return (
    <div className="Courses">
      <Jumbotron fluid className="text-light" id="background">
        <Container>
          <h1 className="d-flex justify-content-center">Courses!</h1>
        </Container>
      </Jumbotron> 
      <Container className="mx-auto my-auto">
        <CardColumns className="card-columns my-auto">
          {courseData.map((course) => {
            return (
              <Card key={course._id} className="Card">
                {course.courseImage ? (
                  <Card.Img
                    src={course.courseImage}
                    alt={`${course.courseName}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title className="title">{course.courseName}</Card.Title>
                  <Card.Text>{course.courseDescription}</Card.Text>
                  <Link
                    className="btn-block btn-danger text-center"
                    to={`/Courses/${course._id}`}
                  >
                    View Tournaments
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </div>
  );
};

export default Courses;
