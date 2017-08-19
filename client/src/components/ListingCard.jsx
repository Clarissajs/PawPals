import React from 'react'
import { Row, Card, Col, CardTitle, CardText } from 'reactstrap'

// import FaEnvelope from '../../node_modules/react-icons/fa/envelope.js'

const dummyNum = '555-555-5555';
const dummyEmail = 'someEmail@gmail.com';
const name = 'firstName lastName';

class ListingCard extends React.Component {
  render() {
    return (
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
            <CardTitle style={{marginBottom: 0}}>{name}</CardTitle>
            <CardText style={{marginBottom: 0}}>{dummyEmail}</CardText>
            <CardText style={{marginBottom: 0}}>{dummyNum}</CardText>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Card>
    )
  }
}

export { ListingCard }