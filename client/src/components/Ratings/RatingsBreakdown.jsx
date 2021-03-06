import React from "react";
import ReactStars from "react-rating-stars-component";
import CharacteristicsBreakdown from "./post-components/CharacteristicsItem.jsx";

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // used to style element
    var barStyle = { height: 20, width: "35%", backgroundColor: "grey" };
    // console.log('metaData in Breakdown: ', this.props.metaData);
    return (
      <div>
        {/* <h3>Ratings Summary</h3> */}
        <p></p>
        <h5>Average Rating</h5>
        <h2>{this.props.averageRating}</h2>
        <p></p>
        {/* <p>Average Rating in stars</p> */}
        {/* <ReactStars name="averageRating" count={this.props.averageRating}/> */}
        {/* <h3>Ratings Breakdown</h3> */}
        <button
          name="fiveRatingClicked"
          value="5"
          className="barRatingBreakdown"
          onClick={this.props.toggleRating}
        >
          5 Stars
        </button>
        &nbsp;&nbsp;
        <span>{this.props.ratingsCountList["5"]}</span>
        <p></p>
        <button
          name="fourRatingClicked"
          value="4"
          className="barRatingBreakdown"
          onClick={this.props.toggleRating}
        >
          4 Stars
        </button>
        &nbsp;&nbsp;
        <span>{this.props.ratingsCountList["4"]}</span>
        <p></p>
        <button
          name="threeRatingClicked"
          value="3"
          className="barRatingBreakdown"
          onClick={this.props.toggleRating}
        >
          3 Stars
        </button>
        &nbsp;&nbsp;
        <span>{this.props.ratingsCountList["3"]}</span>
        <p></p>
        <button
          name="twoRatingClicked"
          value="2"
          className="barRatingBreakdown"
          onClick={this.props.toggleRating}
        >
          2 Stars
        </button>
        &nbsp;&nbsp;
        <span>{this.props.ratingsCountList["2"]}</span>
        <p></p>
        <button
          name="oneRatingClicked"
          value="1"
          className="barRatingBreakdown"
          onClick={this.props.toggleRating}
        >
          1 Star
        </button>
        &nbsp;&nbsp;
        <span>{this.props.ratingsCountList["1"]}</span>
        <p></p>
        {/* <h4>Characteristics Breakdown</h4> */}
        <div>
          <CharacteristicsBreakdown metaData={this.props.metaData} />
        </div>
      </div>
    );
  }
}

export default RatingsBreakdown;
