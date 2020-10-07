import React, { Component } from 'react'
import axios from 'axios';
import { Table, Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            id: 0,
            name: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api')
            .then((res) => {
                this.setState({
                    users: res.data,
                    id: 0,
                    name: '',
                    email: '',
                    password: ''
                })
                console.log(res.data);
            })
    }


    namechange = event => {
        this.setState({
            name: event.target.value
        })
    }

    emailchange = event => {
        this.setState({
            email: event.target.value
        })
    }

    passwordchange = event => {
        this.setState({
            password: event.target.value
        })
    }

    submit(event, id) {
        event.preventDefault()
        if (id === 0) {
            axios.post(`http://localhost:8000/api/`, { name: this.state.name, email: this.state.email, password: this.state.password })
                .then(() => {
                    this.componentDidMount();
                })

        } else {
            axios.put(`http://localhost:8000/api/${id}`, { name: this.state.name, email: this.state.email, password: this.state.password })
                .then(() => {
                    this.componentDidMount();
                })
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(user =>
                                        <tr key={user._id}>
                                            
                                            <td> {user.name} </td>
                                            <td> {user.email} </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
}