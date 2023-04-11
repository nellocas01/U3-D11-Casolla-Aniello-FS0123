import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";
import { gethandleSubmitAction } from "../redux/actions";
import { useDispatch } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const jobs = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect((query) => {
    // getBooks();

    dispatch(gethandleSubmitAction(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleSubmit = async e => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(baseEndpoint + query + "&limit=20");
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       setJobs(data);
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="d-flex flex-wrap align-items-center mx-auto my-3"
        >
          <h1 className="display-1 me-auto">Remote Jobs Search</h1>
          <Button
            variant="outline-primary"
            onClick={() => navigate("/favourites")}
          >
            go to Favourites
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={gethandleSubmitAction(query)}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
