import React from 'react'
import { Row, Card, Col, CardTitle, CardText } from 'reactstrap'

const dummyNum = '614-738-9829';
const dummyEmail = 'someEmail@gmail.com';
const name = 'Spencer Mitchell';

class ListingCard extends React.Component {
  render() {
    return (
      <Card block className='text-left'>
        <Row>
          <Col xs='3'>
            <img src='http://via.placeholder.com/80x80' style={{
              height: '100%',
              borderRadius: '100%'
            }}/>
          </Col>
          <Col xs='9'>
            <CardTitle>{name}</CardTitle>
            <CardText>Number: {dummyNum}</CardText>
            
          </Col>
        </Row>
      </Card>
    )
  }
}

export { ListingCard }