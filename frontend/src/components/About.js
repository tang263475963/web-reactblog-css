import React, { useState } from 'react';
import { Row, Col, Container, Card, CardBody, Badge} from 'reactstrap';

import logo from '../images/big/img2.jpg'

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="bg-light spacer feature20 up">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                        <h3>Heading <Badge color="dark">Know us</Badge>{' '}</h3>
                            <h2 className="title">ยินดีที่คุณเข้ามาใช้เว็บไซต์ของเรา</h2>
                            <h6 className="subtitle">เว็บไซต์นี้สร้างขึ้นมาเพื่อทำการศึกษาระบบการทำงานของ React JS และระบบเว็บไซต์ Blog เพื่อการเรียนรู้ในการสร้างเว็บไซต์แบบง่ายๆ</h6>
                        </Col>
                    </Row>
                </Container>
                <Container>
                <Row>
                    <Col lg="6" className="text-center m-b-30">
                        <h4 className="card-title">ตั้งปณิธาน จันทร์อยู่</h4>
                        <h6 className="card-subtitle"><code>-</code>  ปวส. 2 คอมพิวเตอร์โปรแกรมเมอร์</h6>
                        <img src={logo} alt="img" className="img-circle" width="300" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="6" className="text-center m-b-30">
                        <h4 className="card-title">กาญจนา กาสี</h4>
                        <h6 className="card-subtitle"><code>-</code> ปวส. 2 คอมพิวเตอร์โปรแกรมเมอร์</h6>
                        <img src={logo} alt="img" className="img-circle" width="300" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                </Row>
            </Container>
            </div>
    );
}

export default Example;