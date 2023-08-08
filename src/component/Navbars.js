import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbars() {

    return (
        <div>
            <div>
                <Navbar  expand="lg" className='color-orange'>
                    <Container>
                        <Navbar.Brand href="/">
                            <b>🍣🍜🍱</b>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto text-white">
                                <Nav.Link href="/" className='text-white'>หน้าแรก</Nav.Link>
                                <Nav.Link href="/menu" className='text-white'>เมนูอาหารญี่ปุ่น</Nav.Link>
                                <Nav.Link href="/profile" className='text-white'>ผู้จัดทำ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}
