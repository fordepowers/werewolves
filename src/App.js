import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home/Home';
import Guide from './Guide/Guide';
import Roles from './Roles/Roles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "Home",
    }
  }

  render() {
    return (
      <div className="App">
        <div className="black-gradient-top" />
        <div className="black-gradient-bottom" />
        <Navbar bg="dark" variant="dark" fixed="bottom" className="footer">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav activeKey={this.state.activeKey}>
            <Nav.Link className="footer-item" onClick={() => { this.setState({ activeKey: "Home" }); }}>Home</Nav.Link>
            <Nav.Link className="footer-item" onClick={() => { this.setState({ activeKey: "Guide" }); }}>Guide</Nav.Link>
            <Nav.Link className="footer-item" onClick={() => { this.setState({ activeKey: "Roles" }); }}>Roles</Nav.Link>
            <Nav.Link className="footer-item" href="https://github.com/fordepowers/werewolves-narrator-helper" target="_blank">GitHub</Nav.Link>
          </Nav>
        </Navbar>
        {this.state.activeKey === "Home" ? <Home /> : null}
        {this.state.activeKey === "Guide" ? <Guide /> : null}
        {this.state.activeKey === "Roles" ? <Roles /> : null}
      </div>
    );
  }
}

export default App;
