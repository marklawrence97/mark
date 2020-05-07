import React from "react";

const UpvoteButton = ({ buttonValue, onUpvoteButtonClick }) => {
    return (
      <div>
        <i
          className={buttonValue}
          onClick={onUpvoteButtonClick}
        ></i>
      </div>
    );
}

export default UpvoteButton;
