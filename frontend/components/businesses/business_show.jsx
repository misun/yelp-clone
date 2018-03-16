import React from 'react';
import { MdStar, MdStarBorder, MdStars,  MdStarOutline, MdStarHalf, MdBuild} from 'react-icons/lib/md';
import Header from '../layouts/header';
import Review from './review';
import { withRouter, Link } from 'react-router-dom';

class BusinessShow extends React.Component {
    componentDidMount(){
      this.props.fetchBiz(this.props.match.params.businessId);
    }

    render(){
      const {business, reviews } = this.props;

      const gallery = business.photos ? business.photos.map( (photo, idx) => (
            <div className={ ((idx === 1) ? "gallery-main" : "gallery") } key={ idx } >
              <a href={ photo } target="_blank" >
                <img src={ photo } />
              </a>
              <div className="desc"></div>
            </div>
        )) : null;

      const reviewsComponent = reviews.map( (review) => (
        <Review key={review.id} review={review} user={review.user}  />
      ));


      let rating = [];

      for(let i=0; i < business.avg_rating; i++){
        rating.push(<MdStar size="20px" color="#ed883b"/>);
      }

      return(
          <div className="biz-content">

            <Header />

            <section className="biz-content-top">
              <div className="biz-top-main">
                <div className="biz-header">
                  <div className="biz-header-left">
                    <div><h1>{ business.name }</h1></div>
                    <div className="review-rate">

                      <div className="review-rate-star">
                        { rating }
                        &nbsp;&nbsp;&nbsp;
                        <h4>{ business.review_cnt } Reviews</h4>
                      </div>

                      <div className="biz-header-info">
                        <span className="price-range">$$ {business.price_range}</span>
                          &nbsp;&nbsp;&nbsp;
                        <span className="category">
                          { business.category }</span>
                      </div>

                    </div>
                  </div>

                  <div className="biz-header-right">
                    <Link to={`/business/${business.id}/reviews/new`} className="write-review">
                      <MdStar size={23} color="white" />
                      &nbsp;
                      write a review
                    </Link>
                    <span className="btn-group clearfix">
                      <a href="#" className="ybtn">Add Photo</a>
                      <a href="#" className="ybtn">Share</a>
                      <a href="#" className="ybtn">Bookmark</a>
                    </span>
                  </div>
                </div>

                <div className="biz-sub-content">
                  <div className="map-box">
                    <h1>map box</h1>
                    <MdBuild size={60} />
                  </div>
                  <div className="show-case">
                    { gallery }
                  </div>
                </div>
              </div>
            </section>

            <section className="biz-content-bottom">
              <div className="biz-bottom-main">

                <div className="biz-leftbar">
                  { reviewsComponent }
                </div>

                <div className="biz-rightbar">
                  <div className="biz-info">
                    <ul><h2>Hours</h2>
                      <li>
                        <label>Mon : {business.monday}</label>
                      </li>
                      <li>
                        <label>Tue : {business.tuesday}</label>
                      </li>
                      <li>
                        <label>Wed : {business.wednesday}</label>
                      </li>
                      <li>
                        <label>Thu : {business.thursday}</label>
                      </li>
                      <li>
                        <label>Fri : {business.friday}</label>
                      </li>
                      <li>
                        <label>Sat : {business.saturday}</label>
                      </li>
                      <li>
                        <label>Sun : {business.sunday}</label>
                      </li>
                      <li>
                        <label><h4>Edit business info</h4></label>
                      </li>
                    </ul>
                    <div className="biz-more-info">
                      <ul><h2>More business info</h2>
                        <li>
                          <label>Phone : {business.phone}</label>
                        </li>
                        <li>
                          <label>Address : {business.address}</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        );
    }

}

export default withRouter(BusinessShow);