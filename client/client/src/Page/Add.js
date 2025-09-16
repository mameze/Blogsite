import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   
  const [apidata, setapidata] = useState([]);

  const formSaving = async(data) => {
  try {
        const apiUrl = process.env.REACT_APP_API_ROOT;
        const response = await axios.post(apiUrl, data);

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

  return (
    <Container>
      <h1>Add a new Post</h1>
      <form onSubmit={handleSubmit(formSaving)}>
        <Row>
          <Col xs="12" className="py-3">
            <label>Post Title</label>
            <input
              className="form-control"
              placeholder="Please enter Title"
              {...register("title", {
                required: { value: true, message: "Title is required" },
                maxLength: { value: 20, message: "Max 20 characters" },
              })}
            />
            {errors.title && (
              <small className="text-danger">{errors.title.message}</small>
            )}
          </Col>

          <Col xs="12" className="py-3">
            <label>Post Content</label>
            <textarea
              className="form-control"
              placeholder="Enter your post content"
              {...register("post", {
                required: { value: true, message: "Post content is required" },
              })}
            />
            {errors.post && (
              <small className="text-danger">{errors.post.message}</small>
            )}
          </Col>

          <Col>
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default Add;
