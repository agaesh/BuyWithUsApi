import React from 'react';
import { ClipLoader } from 'react-spinners';
const SpinnerContainer = ({ loading, children }) => {
  return (
    <div className="spinner-container">
      {loading ? (
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      ) : (
        children
      )}
    </div>
  );
};

export default SpinnerContainer;