import React from 'react'
import { Row, CardGroup, Card, Col, CardTitle, CardText } from 'reactstrap'

const dummyNum = '614-738-9829';
const name = 'Spencer Mitchell'


class Listings extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs='12'>
            <Card block className='text-left'>
              <CardTitle>{name}</CardTitle>
              <CardText>Number: {dummyNum}</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Card block className='text-left'>
              <CardTitle>{name}</CardTitle>
              <CardText>Number: {dummyNum}</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Card block className='text-left'>
              <CardTitle>{name}</CardTitle>
              <CardText>Number: {dummyNum}</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Card block className='text-left'>
              <CardTitle>{name}</CardTitle>
              <CardText>Number: {dummyNum}</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Card block className='text-left'>
              <CardTitle>{name}</CardTitle>
              <CardText>Number: {dummyNum}</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Card block className='text-left'>
              <CardTitle>{name}</CardTitle>
              <CardText>Number: {dummyNum}</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Card block className='text-left'>
              <CardTitle>{name}</CardTitle>
              <CardText>Number: {dummyNum}</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Card block className='text-left'>
              <CardTitle>{name}</CardTitle>
              <CardText>Number: {dummyNum}</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Card block className='text-left'>
              <CardTitle>{name}</CardTitle>
              <CardText>Number: {dummyNum}</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Card block className='text-left'>
              <CardTitle>{name}</CardTitle>
              <CardText>Number: {dummyNum}</CardText>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Listings