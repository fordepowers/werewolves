import React from 'react';
import roles from './rolesText';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Roles.css';

class Roles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let options = [];

    console.dir(roles);
    for (let role in roles) {
      console.dir(role);
      options.push(
        <option>{`${role}`}</option>
      )
    }

    return (
      <div className="Roles">
        <div className="top-heading">
          <h1>Roles</h1>
          <span>Select a role from the dropdown for further detail</span>
          <hr />
          <select>
            {options}
          </select>
        </div>
      </div>
    );
  }
}

export default Roles;
