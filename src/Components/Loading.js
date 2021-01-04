import React from "react";
import "./Loading.css";

function Loading() {
  return (
      <div className="d-flex justify-content-center align-items-center loading">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
  );
}

export default Loading;
