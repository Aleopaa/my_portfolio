import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectPage = () => {
    return <>
    <div className="ps-5 pt-3">
    <h1 className="">My Projects</h1>
<p>These are my projects </p>
</div>
<div className="ps-5">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Windoge XP</Card.Title>
        <Card.Text>
          This is the Lap one project that we did.
        </Card.Text>
        <Button variant="primary">Tell me more</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="ps-5">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>RAAD.JS</Card.Title>
        <Card.Text>
          This is the Lap two project that we did.
        </Card.Text>
        <Button variant="primary">Tell me more</Button>
      </Card.Body>
    </Card>
    </div>
    </>
    
}

export default ProjectPage;