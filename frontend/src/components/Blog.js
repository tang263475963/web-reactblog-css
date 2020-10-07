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
        axios.get('http://localhost:8000/api/blog')
            .then((res) => {
                this.setState({
                    blog: res.data,
                    id: 0,
                    title: '',
                    description: '',
                    photo: '',
                    user: ''
                })
                console.log(res.data);
            })
    }

    /*    titlechange = event => {
           this.setState({
               title: event.target.value
           })
       }
   
       descriptionchange = event => {
           this.setState({
               description: event.target.value
           })
       }
   
       photochange = event => {
           this.setState({
               photo: event.target.value
           })
       }
       userchange = event => {
           this.setState({
               user: event.target.value
           })
       }
   
       submit(event, id) {
           event.preventDefault()
           if (id === 0) {
               axios.post(`http://localhost:8000/api/blog/`, { title: this.state.title, description: this.state.description, photo: this.state.photo, user: this.state.user, })
                   .then(() => {
                       this.componentDidMount();
                   })
           } else {
               axios.put(`http://localhost:8000/api/blog/${id}`, { title: this.state.title, description: this.state.description, photo: this.state.photo, user: this.state.user, })
                   .then(() => {
                       this.componentDidMount();
                   })
           }
       }
   
       delete(id) {
           axios.delete(`http://localhost:8000/api/blog/${id}`)
               .then(() => {
                   this.componentDidMount();
               })
       }
   
       edit(id) {
           axios.get(`http://localhost:8000/api/blog/${id}`)
               .then((res) => {
                   console.log(res.data)
                   this.setState({
                       id: res.data._id,
                       title: res.data.title,
                       description: res.data.description,
                       photo: res.data.photo,
                       user: res.data.user
                   })
               })
       }
    */

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
                                    <CardTitle><Link to={'/blog/'+B._id}> {B.title} </Link></CardTitle>
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
