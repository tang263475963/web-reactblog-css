import React, { Component } from 'react';
import axios from 'axios';
import {
    Table, Col, Row, Form, FormGroup, Label, Input, Button,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Blog extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            id: 0,
            title: '',
            description: '',
            photo: '',
            user: ''
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8000/api/blog/`)
            .then((res) => {
                this.setState({
                    blogs: res.data,
                    id: 0,
                    title: '',
                    description: '',
                    photo: '',
                    user: ''
                })
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <Link to="/blogform">POST</Link>
                <Row>
                    {
                    this.state.blogs.map(B =>
                        <Col md={3} key={B._id}> 
                                <Card >
                                {/* <CardImg top width="100%" src={B.photo}  /> */}
                                <CardBody>
                                    <CardTitle><Link to="/blog/{B._id}"> {B.title} </Link></CardTitle>
                                    <CardSubtitle>{B.user}</CardSubtitle>
                                    <CardText>{B.description}</CardText>
                                    {/* 
                                     <Button color="warning" onClick={(e) => this.edit(B._id)}>Edit</Button>{' '}
                                     <Button color="danger" onClick={(e) => this.delete(B._id)} >Delete</Button> 
                                    */}
                                </CardBody>
                            </Card>
                    </Col>
                     )
                    }
                </Row>
            </div>
        )
    }
}
