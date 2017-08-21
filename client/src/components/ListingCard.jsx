import React from 'react'
import { Row, Card, Col, CardTitle, CardText } from 'reactstrap'

// import FaEnvelope from '../../node_modules/react-icons/fa/envelope.js'

const ListingCard = ({ listing }) => (
  <Card block className='text-left' style={{
    backgroundColor: '#F7FFED',
    borderRadius: 0
  }}>
    <Row>
      <Col xs='3'>
        <img src='http://via.placeholder.com/80x80' style={{
          height: '100%',
          borderRadius: '100%'
        }}/>
      </Col>
      <Col xs='9'>
        <CardTitle style={{marginBottom: 0}}>{listing.name}</CardTitle>
        <CardText style={{marginBottom: 0}}>{listing.email}</CardText>
      </Col>
    </Row>
  </Card>
)

export { ListingCard }