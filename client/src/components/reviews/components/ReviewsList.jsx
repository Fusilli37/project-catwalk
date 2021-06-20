import React, { useState, useContext, useEffect } from "react";
import { ProductContext, ReviewsContext } from "../../../store.jsx";
import StarRating from "./StarRatings.jsx";
import MoreReviews from "./MoreReviews.jsx";
import MakeReviewForm from "./MakeReviewForm.jsx";
import ReviewModal from "./ReviewModal";
import styles from "../styles/ReviewModals.module.css";
import tileStyles from "../styles/ReviewTile.module.css";
import dividers from "../styles/reviews.css";
import buttons from "../../qa/styles/QuestionsList.module.css";
import meta from "../../qa/styles/MetaData.module.css";
import CallMoreReviews from "../api/CallMoreReviews";
import SortedReviews from "./SortedReviews";

const { buttonWrapperStyles } = styles;
const { select, titleRow, userName, ratingStar, helpStyle } = tileStyles;
const { solid, reviewRow } = dividers;
const { buttonSpacing } = buttons;
const { metaData, link, seeMoreAnswers } = meta;

const ReviewsList = () => {
  const product = useContext(ProductContext);
  const review = useContext(ReviewsContext);
  const reviews = review;

  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(true);
  const [count, setCount] = useState(2);
  const [sortedArray, setSortedArray] = useState();

  const handleClick = () => {
    setList(true);
  };

  const addTwo = () => {
    setCount(count + 2);
  };

  const totalReviews = review.length;

  useEffect(() => {
    const wait = async () => {
      const val = await review;
      setSortedArray(val);
    };
    wait();
  }, [review]);

  const sortArray = (type) => {
    const types = {
      Helpful: "helpfulness",
      Newest: "date",
      Relevant: "rating",
    };

    const sortProperty = types[type];
    const sorted = [...review].sort((a, b) => {
      if (a[sortProperty] > b[sortProperty]) {
        return -1;
      }
      if (a[sortProperty] < b[sortProperty]) {
        return 1;
      }
      return 0;
    });
    setSortedArray(sorted);
  };

  if (list === true) {
    return (
      <div>
        <div>
          <div style={{ display: "flex" }}>
            <h3>{totalReviews}</h3>
            <p> reviews, sorted by </p>
            <select
              defaultValue="Relevant"
              onChange={(e) => sortArray(e.target.value)}
              className={select}
            >
              <option value="Helpfull">Helpful</option>
              <option value="Newest">Newest</option>
              <option value="Relevant">Relevant</option>
            </select>
          </div>
        </div>
        {sortedArray && (
          <SortedReviews count={count} sortedArray={sortedArray} />
        )}
        {/* {list ? <div>{reviews.slice(0, count)} </div> : null} */}
        <div>
          {reviews.length > count ? (
            <button
              className={`textButton ${buttonSpacing}`}
              onClick={() => {
                addTwo();
              }}
            >
              More Reviews
            </button>
          ) : null}
          <button
            className={`textButton ${buttonSpacing}`}
            onClick={() => setIsOpen(true)}
          >
            {" "}
            Write A Review{" "}
          </button>
        </div>
        <div
          className={buttonWrapperStyles}
          onClick={() => console.log("clicked")}
        >
          <ReviewModal open={isOpen} closeModal={() => setIsOpen(false)}>
            <MakeReviewForm />
          </ReviewModal>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Reviews</p>
        <div> -- </div>
        <div
          className={buttonWrapperStyles}
          onClick={() => console.log("clicked")}
        >
          <button className="textButton" onClick={() => setIsOpen(true)}>
            {" "}
            Write A Review{" "}
          </button>
          <ReviewModal open={isOpen} closeModal={() => setIsOpen(false)}>
            <MakeReviewForm />
          </ReviewModal>
        </div>
      </div>
    );
  }
};

export default ReviewsList;
