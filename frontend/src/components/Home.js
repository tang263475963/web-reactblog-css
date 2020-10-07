import React, { Component } from 'react'
import Slides from './Slides'
import { Button, Container } from 'reactstrap';

export default class Home extends Component {
    render() {
        return (

            <div>
                <hr />
                
                <Slides />
                <hr />
                <Container>
                <a href="/blog" className="btn btn-md m-t-30 btn-info-gradiant font-14">
                <Button block={true} variant="contained" color="warning"  size="lg">
                    TELL YOUR STORY !
                </Button></a>
                <h3>ลองเขียน live style ของคุณดูสิ</h3>
                
                </Container>
            </div>

        )
    }
}
