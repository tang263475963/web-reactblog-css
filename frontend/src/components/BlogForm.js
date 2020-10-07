import React, { Component } from 'react';
import axios from 'axios';
import {
    Table, Col, Row, Form, FormGroup, Label, Input, Button,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';

export default class BlogForm extends Component {
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

    titlechange = event => {
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


    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form onSubmit={(e) => this.submit(e, this.state.id)}>
                            <FormGroup row>
                                <Label md={2}>Title</Label>
                                <Col md={10}>
                                    <Input type="text" onChange={(e) => this.titlechange(e)} value={this.state.title} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2}>รายละเอียด</Label>
                                <Col md={10}>
                                    <Input type="textarea" onChange={(e) => this.descriptionchange(e)} value={this.state.description} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2}>รูปภาพ</Label>
                                <Col md={10}>
                                    <Input type="file" onChange={(e) => this.photochange(e)} value={this.state.photo} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2}>ผู้ใช้</Label>
                                <Col md={10}>
                                    <Input type="text" onChange={(e) => this.userchange(e)} value={this.state.user} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button color="success">บันทึกข้อมูล</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
