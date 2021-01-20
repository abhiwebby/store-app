import React from "react";

const Rating = ({ value, text }: { value: number; text: string }) => {
  return (
    <div className="rating">
      <div className="rating_blockA">
        <span>
          <i
            className={
              value >= 1
                ? "fa fa-star"
                : value >= 0.5
                ? "fa fa-star-half"
                : "fa fa-star-o"
            }
            aria-hidden="true"
          ></i>
        </span>
        <span>
          <i
            className={
              value >= 2
                ? "fa fa-star"
                : value >= 1.5
                ? "fa fa-star-half"
                : "fa fa-star-o"
            }
            aria-hidden="true"
          ></i>
        </span>
        <span>
          <i
            className={
              value >= 3
                ? "fa fa-star"
                : value >= 2.5
                ? "fa fa-star-half"
                : "fa fa-star-o"
            }
            aria-hidden="true"
          ></i>
        </span>
        <span>
          <i
            className={
              value >= 4
                ? "fa fa-star"
                : value >= 3.5
                ? "fa fa-star-half"
                : "fa fa-star-o"
            }
            aria-hidden="true"
          ></i>
        </span>
        <span>
          <i
            className={
              value >= 5
                ? "fa fa-star"
                : value >= 4.5
                ? "fa fa-star-half"
                : "fa fa-star-o"
            }
            aria-hidden="true"
          ></i>
        </span>
      </div>
      <div className="rating_blockB">
        <span className="reviews">{text && text}</span>
      </div>
    </div>
  );
};

export default Rating;
