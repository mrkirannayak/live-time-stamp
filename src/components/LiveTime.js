import React, { useState, useEffect } from "react";

const LiveTime = () => {
  const [timeUpdate, SetTimeUpdate] = useState(new Date());
  useEffect(() => {
    const livetime = setInterval(() => SetTimeUpdate(new Date()), 1000);
    return function cleanup() {
      clearInterval(livetime);
    };
  });
  return <>{timeUpdate.toLocaleTimeString()}</>;
};

export default LiveTime;
