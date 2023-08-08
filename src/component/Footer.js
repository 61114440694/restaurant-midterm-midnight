/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
    <div className='footer p-2'>
            <Row>
                <Col className='text-start'> <b><span className='m-2'>© 2023 {<a href='/profile'>ผู้จัดทำ ∙ Sakkarin Harnchanaphol</a>}</span></b></Col>
                <Col className='text-end'><a href='javascript:history.back()'><b>Back to top</b></a></Col>
            </Row>
    </div>
    </>
    
   
    
    
  )
}
