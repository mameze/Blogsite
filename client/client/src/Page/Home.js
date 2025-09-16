import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    const [apidata, setapidata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_ROOT;
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
          const records = response?.data?.Blog_records;
          if (Array.isArray(records)) {
            setapidata(records);
          } else {
            console.warn("Blog_records is not an array:", records);
            setapidata([]); 
          }
        }
      } catch (error) {
        console.log("Fetch error:", error);
        setapidata([]); 
      }
    };

    fetchdata();
  }, []);
    console.log("apidata",apidata);
    return (
    <Container>
      <Row>
        <h1>
          <Link to="add" className="btn btn-primary">Add New</Link>
          </h1>
          {apidata &&
        apidata.map((record, index) => {
        console.log("record.ID:", record.id, "| record:", record);

        return (
          <Col key={index} xs="4" className="py-5 box">
            <h5 className="title">
              <Link to={`blog/${record.ID}`}>{record.title}</Link>
            </h5>
            <p>{record.post}</p>
          </Col>
        );
      })}

      </Row>
    </Container>
  );
}

export default Home;
     