import React from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";



const Blog = () => {
  const [ apidata, setapidata] = useState(null);
  const { id } = useParams();
   
  useEffect(() => {
  const fetchdata = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_API_ROOT}`;
      const response = await axios.get(apiUrl);

      if (response.status === 200) {
        const records = response?.data?.Blog_records;
        const singlePost = records.find(post => post.ID === parseInt(id));
        setapidata(singlePost || null);
      }
    } catch (error) {
      console.log("Fetch error:", error);
      setapidata(null); 
    }
  };

  fetchdata();
}, [id]);

      console.log("apidata");
  return (
  <Container>
    <Row>
      {apidata ? (
        <>
          <Col xs="12"><h1>{apidata.title}</h1></Col>
          <Col xs="12"><p>{apidata.post}</p></Col>
        </>
      ) : (
        <Col xs="12"><p>Loading blog post or not found...</p></Col>
      )}
    </Row>
  </Container>

  );
};

export default Blog;
