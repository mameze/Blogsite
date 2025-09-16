import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';

const Header = () => {
  return (
    <>
      <Container fluid className="header bg-light py-3">
        <h1 className="text-center text-uppercase">React Blog with FIBER Backend</h1>
      </Container>

      <Container>
        <ul className="menu d-flex gap-4 justify-content-center list-unstyled my-3">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </Container>
    </>
  );
};

export default Header;
