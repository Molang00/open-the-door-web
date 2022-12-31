import React from "react";
import { OPEN, requestAction } from "../firebase/FirebaseRealtimeDB";

const User = () => {
  console.log("RELOAD PAGE");
  return (
    <div>
      <h1>Open The Door</h1>
      <button onClick={() => requestAction(OPEN)}>문 열기</button>
    </div>
  );
};

export default User;
