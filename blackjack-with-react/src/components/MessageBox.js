import React from 'react'
import Card from 'react-bootstrap/Card'

export const MessageBox = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body style={{backgroundColor: '#C1DBA9'}}>
          <Card.Title className='d-flex justify-content-center' style={{margin: '0px'}}>
            Message for Player
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}
