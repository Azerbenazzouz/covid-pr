import React from "react";

const Loading = () => {
  return (

    <div className="spinner-border text-primary" style={{margin:'50%' ,marginTop:'10%'}} role="status">
      <center>
      <span className="sr-only" style={{margin:'50%'}}>Loading...</span></center>
    </div>
  );
};

export default Loading;
