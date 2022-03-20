import React from 'react';
import Api from './Api';

import { Card } from 'react-bootstrap';
class MyCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {nom : "", url : "", location : ""};
    }

    componentDidMount(){
        Api.get("/api/")
        .then((resultat) => {
            let name = resultat.data.results[0].name.first + " " + resultat.data.results[0].name.last
            console.log(resultat)
            let pictureUrl = resultat.data.results[0].picture.large
            this.setState({name: name});
            this.setState({url: pictureUrl});
            this.setState({location: resultat.data.results[0].location.city + ", " + resultat.data.results[0].location.country})
        });
    }

    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.state.url} />
                <Card.Body>
                    <Card.Title>{this.state.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.location}</Card.Subtitle>
                </Card.Body>
            </Card>
        );
    }
}

export default (MyCard);
