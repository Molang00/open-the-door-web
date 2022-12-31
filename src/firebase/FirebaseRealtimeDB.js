import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { onChildChanged, onValue, ref, set } from "firebase/database";

const OPEN = "open-the-door";
const CLEAR = "clear";

const FirebaseRealtimeDB = () => {
  const dbPrefix = "request-action/";

  useEffect(() => {
    onValue(ref(db, dbPrefix), (data) => {
      const requestedAction = data.val();
      console.log("requestedAction: " + requestedAction);

      handleRequestedAction(requestedAction);
    });
  }, []);

  const handleRequestedAction = (action) => {
    if (action == OPEN) {
      const result = openTheDoor();
      requestAction(CLEAR);
      // if (!result) requestAction(OPEN);
    }
  };

  const openTheDoor = () => {
    console.log("Openning Request");
    fetch("http://192.168.35.99/?relay=on")
      .then((res) => {
        console.log("success");
        return true;
      })
      .catch((err) => {
        console.log("fail");
        console.log(err.message);
        return false;
      });
  };

  const requestAction = (action) => {
    console.log("requestAction " + action);
    set(ref(db, dbPrefix), action);
  };

  console.log("RELOAD PAGE");
  return (
    <div>
      {/* {requestList?.map((data) => (
        <div key={data.id}>
          <div>
            action: {data.action}
            <br />
            timestamp: {data.timestamp}
          </div>
          <button onClick={() => onClickRemove(data.id)}>삭제</button>
          <hr />
        </div>
      ))} */}
      <h1>Open The Door</h1>
      <button onClick={() => requestAction(OPEN)}>문 열기</button>
    </div>
  );
};

export default FirebaseRealtimeDB;
