import React from "react";
import RatingHelpfulNess from "./post-components/RatingHelpfulness.jsx";
import axios from "axios";
import moment from "moment";
// first review when filtering becomes 5 stars by default
import ReactStars from "react-rating-stars-component";
import StarRating from "react-star-rating-component";
import Checkmark from "react-checkmark";

class RatingsItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.incrementHelpfulCount = this.incrementHelpfulCount.bind(this);
  }

  incrementHelpfulCount(event) {
    if (event.target.value === "Yes") {
      // create Axios PUT request for helpfulness
      this.props.post.helpfulness++;

      axios
        .put(
          `api/reviews/${this.props.post.review_id}/helpful`,
          this.props.post
        )
        .then(() => {
          this.props.getReviewsList();
          console.log("Received response from PUT request in client!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    var barStyle = { height: 25, width: "30%" };

    return (
      <div>
        <div style={{ fontSize: 35 }}>
          <StarRating
            class="reviewRatingStar"
            name="reviewRating"
            starCount={this.props.post.rating}
            editing={true}
          />
        </div>
        <div className="reviewText">
          <p>{moment(this.props.post.date).utc().format("MMMM DD, YYYY")}</p>
        </div>
        <div className="reviewSummary">
          <p>{this.props.post.summary}</p>
        </div>
        <p>{this.props.post.body}</p>
        {/* <p>{this.props.post.recommend}</p> */}

        {this.props.post.recommend === true ? (
          <div>
            {/* <Checkmark /> */}
            <i>*** I recommend this product! ***</i>
          </div>
        ) : null}

        <p></p>
        <div className="reviewText">
          <p>{this.props.post.reviewer_name}</p>
        </div>
        <p></p>
        {/* <h6>[ Response to Review ]</h6> */}
        <p></p>
        <h5>Was this review helpful?</h5>
        <div className="reviewBottom">
          <button
            className="reviewHelpful"
            value="Yes"
            onClick={this.incrementHelpfulCount}
          >
            Yes
          </button>
          &nbsp;&nbsp;
          <span>{this.props.post.helpfulness}</span>
        </div>
        <p></p>
        <p></p>
      </div>
    );
  }
}

export default RatingsItemsList;

// if Ubuntu copy/paste doesn't work
// right click Ubuntu
// go to Properties
// check the box to enable Ctrl V
