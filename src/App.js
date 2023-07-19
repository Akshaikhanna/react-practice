import "./App.css";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/skill":
      component = <Skills />;
      break;
    case "/contact":
      component = <Contact />;
      break;
  }
  return (
    <>
      <nav className="nav">
        <h4 className="h2">React Developer</h4> 
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/skill">Skills</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      {component}
    </>
  );
}

export default App;

/* <div className="navbar">
<Navbar bg="dark" data-bs-theme="dark">
  <img src={Image} width="50" height="45" className="img1" />
  <Navbar.Brand bg="dark" href="#home" >
    React Developer
   
    Akshai khanna
  </Navbar.Brand>
  <Nav class="navbar-nav ms-auto ">
    <Nav.Link as={Link} to="/">
Home
    </Nav.Link>

    <Nav.Link as={Link} to="/skills">
      
      Skills
    </Nav.Link>
    <Nav.Link as={Link} to="/contact">
      
      Contact
    </Nav.Link>
  </Nav>
</Navbar>
</div>
<div className="links">
<Routes>
  <Route path="/" element={<Home />} />
 
  <Route path="/skills" element={<Skills />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
</div> */
