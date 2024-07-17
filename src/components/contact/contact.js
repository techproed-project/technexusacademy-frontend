import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactMenu from '../common/footer/contact-menu'
import ContactForm from './contact-form'

const Contact = () => {
  return (
    <div className="contact">
        <Container>
            <Row>
                <Col md={8}>
                    <ContactForm/>
                </Col>
                <Col md={4}>
                    <h2>Get In Touch</h2>
                    <ContactMenu className="flex-column"/>
                </Col>
            </Row>


        </Container>

    </div>
  )
}

export default Contact