import React from 'react'

import { ShimmerPostList } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
    <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={20}/>
    
    </div>
  );
};
export default Shimmer;

