import React, { useEffect } from "react";
import { db } from "../firebase/firebase";
import { onValue, ref } from "firebase/database";
import {
  handleRequestedAction,
  OPEN,
  openTheDoor,
  requestAction,
  rtdbPrefix,
} from "../firebase/FirebaseRealtimeDB";

const Admin = () => {
  useEffect(() => {
    onValue(ref(db, rtdbPrefix), (data) => {
      const requestedAction = data.val();
      console.log("requestedAction: " + requestedAction);

      handleRequestedAction(requestedAction);
    });
  }, []);

  console.log("RELOAD PAGE");
  return (
    <div>
      <h1>Open The Door</h1>
      <button onClick={() => requestAction(OPEN)}>문 열기</button>
      <button onClick={openTheDoor}>Local API Test</button>
    </div>
  );
};

export default Admin;
