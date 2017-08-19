import React from 'react'
import { Container } from 'reactstrap'
import { ListingCard } from './ListingCard'
import { connect } from 'react-redux'



class Listings extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    let listingCards = [];

    for (let i = 0; i < 10; i++) {
      listingCards.push(<ListingCard listing={this.props.listings[i]} />);
    }

    return (
      <div>
        {listingCards}
      </div>
    )
  }
}

// Connect Listings to redux store

const mapStateToProps = state => state.listings;


Listings = connect(
  mapStateToProps
)(Listings);

export default Listings;