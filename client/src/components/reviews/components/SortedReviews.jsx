import React, { useState, useContext, useEffect } from "react";
import { ProductContext, ReviewsContext } from "../../../store.jsx";
import StarRating from "./StarRatings.jsx";

import styles from "../styles/ReviewModals.module.css";
import tileStyles from "../styles/ReviewTile.module.css";
import dividers from "../styles/reviews.css";
import meta from "../../qa/styles/MetaData.module.css";

const { solid, reviewRow } = dividers;
const { select, titleRow, userName, ratingStar, helpStyle } = tileStyles;
const { metaData, link, seeMoreAnswers } = meta;

const SortedReviews = ({ sortedArray, count }) => {
  let list = sortedArray.map(
    ({
      review_id,
      rating,
      summary,
      response,
      body,
      date,
      reviewer_name,
      helpfulness,
    }) => {
      return (
        <div key={review_id}>
          <hr className={solid} />
          <div className={titleRow}>
            <StarRating rating={rating} className={ratingStar} />
            <div key={review_id} className={`username ${metaData}`}>
              <div style={{ color: "grey" }}>
                {reviewer_name} {new Date(date).toDateString()}
              </div>
            </div>
          </div>
          <span>{summary}</span>
          <p style={{ color: "grey" }} key={review_id}>
            {body}
          </p>
          <div>
            <div className={helpStyle}>
              Helpful?{" "}
              <span>
                <a style={{ color: "grey" }} href="">
                  Yes
                </a>{" "}
                ({helpfulness}) |{" "}
                <a className="link" style={{ color: "grey" }} href="">
                  Report
                </a>
              </span>
            </div>
          </div>
          <hr className={solid} />
        </div>
      );
    }
  );

  return <>{list ? list.slice(0, count) : null}</>;
};

export default SortedReviews;
