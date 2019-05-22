import React from "react";

const FlashMessage = (props) => {
  return (
    <div className="container">
      <div className={`alert ${props.type} pr-5`} style={{display: 'inline-block'}}>
        {props.msg}
      </div>
    </div>
  );
};

export default FlashMessage;
