import React from "react";

const Instructions = () => {
  return (
    <div className="col-lg-3 col-12 mt-3 pt-3">
      <div className="instructions">
        <h2 className="text-center">Instructions</h2>
        <ol>
          <li>Both players has uses 'X' to play.</li>
          <li>Whoever makes 3 in a row loses the game.</li>
          <li className="text-danger">The key is to avoid making a row.</li>
        </ol>
        <h5 className="text-center">
          <a href="https://www.facebook.com/samarajyastha" target="_blank">
            Samarajya Shrestha
          </a>
        </h5>
      </div>
    </div>
  );
};
export default Instructions;
