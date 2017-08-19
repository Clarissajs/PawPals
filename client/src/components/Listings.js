import React from 'react'
import { Container } from 'reactstrap'
import { ListingCard } from './ListingCard'


class Listings extends React.Component {
  render() {

    let listings = [];

    for (let i = 0; i < 10; i++) {
      listings.push(<ListingCard />);
    }

    return (
      <Container>

      {listings}
        
      </Container>
    )
  }
}

export default Listings