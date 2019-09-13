import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <h1>Werewolves</h1>
            <hr />
            <br />
            <Button className="start" variant="dark">Start</Button>
        </div>
    );
}

export default Home;
