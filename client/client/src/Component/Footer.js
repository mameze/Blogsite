import { Container } from "react-bootstrap"
import {link} from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import './App.css';


    const Header = () => {
        return (
            <>
            <Container fluid className="Container-fluid header">
                <h1 className="text-center text-Uppercase">
                React Blog with FIBER Backend                </h1>
            </Container>
            <Container>
                <div>
                    <ul className="Menu"/>
                    <li>
                        <link to="/">Home</link>
                        </li>
                           <li>
                        <link to="/">Blog</link>
                        </li>
                           <li>
                        <link to="/">About</link>
                        </li>
                </div>
            </Container>
            </>
        )};
      