import React from "react";

const Bear = ({ bear, idx }) => {
  return (
    <div>
      <li key={idx}>{bear.latinName}</li>
      <li key={idx}>{bear.type}</li>
    </div>
  );
};

export default Bear;
