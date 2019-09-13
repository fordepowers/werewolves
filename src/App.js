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
      activeKey: "home",
    }
  }

  componentWillMount() {
    this.setState({ activeKey: "home" });
  }

  renderTabs() {
    switch (this.state.activeKey) {
      case "home":
        return <Home />
      case "guide":
        return <Guide />
      case "roles":
        return <Roles />
      default:
        return <Home />
    }
  }

  handleClick(section) {
    switch (section) {
      case "home":
        this.setState({ activeKey: "home" });
        break;
      case "guide":
        this.setState({ activeKey: "guide" });
        break;
      case "roles":
        this.setState({ activeKey: "roles" });
        break;
      default:
        this.setState({ activeKey: "home" });
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="black-gradient-top" />
        <Navbar bg="dark" variant="dark" fixed="bottom" className="header">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav activeKey={this.state.activeKey}>
            <Nav.Link onClick={() => { this.handleClick("home") }}>Home</Nav.Link>
            <Nav.Link onClick={() => { this.handleClick("guide") }}>Guide</Nav.Link>
            <Nav.Link onClick={() => { this.handleClick("roles") }}>Roles</Nav.Link>
            <Nav.Link href="https://github.com/fordepowers/werewolves-narrator-helper" target="_blank">GitHub</Nav.Link>
          </Nav>
        </Navbar>
        <div className="black-gradient-bottom" />
        {this.renderTabs()}
      </div>
    );
  }
}

export default App;
