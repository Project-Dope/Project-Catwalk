import React from 'react';
import RatingHelpfulNess from './post-components/RatingHelpfulness.jsx';
import axios from 'axios';
import moment from 'moment';
// first review when filtering becomes 5 stars by default
import ReactStars from 'react-rating-stars-component';
import StarRating from "react-star-rating-component";

class RatingsItemsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }

    this.incrementHelpfulCount = this.incrementHelpfulCount.bind(this);
  }

  incrementHelpfulCount(event) {
    console.log(event.target.value);
    console.log('selectedItem: ', this.props.post);

    if (event.target.value === 'Yes') {
      // create Axios PATCH request for helpfulness
      this.props.post.helpfulness++;

      axios.put(`api/reviews/${this.props.post.review_id}/helpful`, this.props.post)
      .then((response) => {
        console.log('Axios PUT response: ', response.data)
      })
      .catch((err) => {
        console.log(err);
      })

    } else {
      // create Axios PATCH request for helpfulnessNo
    }
  }

  render() {

    var barStyle = {height: 25, width: '30%'};

    return (
      <div>
        {/* <p>{this.props.post.rating}</p> */}
        <div style={{fontSize: 30}}>
          <StarRating
          class="reviewRatingStar"
          name="reviewRating"
          starCount={this.props.post.rating}
          editing={true}
          />
        </div>
        <p>{moment(this.props.post.date).utc().format('MMMM DD, YYYY')}</p>
        <p>{this.props.post.summary}</p>
        <p>{this.props.post.body}</p>
        <p>{this.props.post.recommend}</p>
        <p>{this.props.post.reviewer_name}</p>
        <h5>[ Response to Review ]</h5>
        {/* <RatingHelpfulNess incrementHelpfulCount={this.incrementHelpfulCount} /> */}
        <h5>Was this review helpful?</h5>
        <button value="Yes" style={barStyle} onClick={this.incrementHelpfulCount}>Yes</button>
        <p>{this.props.post.helpfulness}</p>
        {/* <button value="No" onClick={this.incrementHelpfulCount}>No</button> */}
        <h2></h2>
      </div>
    )

  }

}

export default RatingsItemsList;

// var RatingsItemsList = (props) => (
//   <div>
//     <h3>RatingsItemsList</h3>
//     <p>{props.post.starRating}</p>
//     <p>{props.post.dateOfReview}</p>
//     <p>{props.post.reviewSummary}</p>
//     <p>{props.post.reviewBody}</p>
//     <p>{props.post.recommend}</p>
//     <p>{props.post.username}</p>
//     <h4>Response to Review</h4>
//     <h4>Rating Helpfulness</h4>
//     <h2>---------------------------</h2>
//   </div>
// )



// if Ubuntu copy/paste doesn't work
  // right click Ubuntu
    // go to Properties
      // check the box to enable Ctrl V