import React from 'react';
import { Row, Col, Container, Card } from 'reactstrap';
import { Button } from '@material-ui/core';


import logo1 from '../images/big/img2.jpg'
import logo2 from '../images/big/img6.jpg'
import logo3 from '../images/big/img1.jpg'


const Test = () => {
    return (
        <div className="blog-home2 spacer">
            
                <Container>
                    
                    <Row className="justify-content-center">
                        <Col md="8" className="text-center">
                            <h2 className="title">React Blogs !</h2>
                            <h6 className="subtitle">คุณสามารถ เรียนรู้เรื่องราวต่างๆได้ เพียงแค่คลิก !</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40 justify-content-center">
                        <Col lg="4" md="6">
                            <Card>
                                <a href="/Test1"><img className="card-img-top" src={logo1} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">Oct<span>23</span></div>
                                <h5 className="font-medium m-t-30"><a href="/Test1" className="link">You should have eagle’s eye on new trends and techonogies</a></h5>
                                <p className="m-t-20">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>
                                <a href="/Test1" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="4" md="6">
                            <Card>
                                <a href="/Test2"><img className="card-img-top" src={logo3} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">Oct<span>23</span></div>
                                <h5 className="font-medium m-t-30"><a href="/Test2" className="link">New Seminar on Newest Food Recipe from World’s Best</a></h5>
                                <p className="m-t-20">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>
                                <a href="Test2" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="4" md="6">
                            <Card>
                                <a href="/Test3"><img className="card-img-top" src={logo2} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">Oct<span>23</span></div>
                                <h5 className="font-medium m-t-30"><a href="/Test3" className="link">Learn from small things to create something bigger.</a></h5>
                                <p className="m-t-20">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>
                                <a href="Test3" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        
    );
}

export default Test;

