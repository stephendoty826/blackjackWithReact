import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MessageBox } from './MessageBox'
import { BetDropDown } from './BetDropDown'
import { ResetButton } from './ResetButton'

export const MessageRow = () => {
  return (
    <>
      <Container fluid>
        <Row style={{height: '10vh'}}>
          <Col className='d-flex justify-content-center align-items-center' style={{backgroundColor: 'purple'}}>
            <MessageBox />
          </Col>
          <Col className='d-flex justify-content-center align-items-center' style={{backgroundColor: 'pink'}}>
            <BetDropDown />
            <ResetButton />
          </Col>
        </Row>
      </Container>
    </>
  )
}
