import { db } from "./firebase";
import { ref, set } from "firebase/database";

export const OPEN = "open-the-door";
export const CLEAR = "clear";

export const rtdbPrefix = "request-action/";

export const handleRequestedAction = (action) => {
  if (action === OPEN) {
    const result = openTheDoor();
    requestAction(CLEAR);
    // if (!result) requestAction(OPEN);
  }
};

export const openTheDoor = () => {
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

export const requestAction = (action) => {
  console.log("requestAction " + action);
  set(ref(db, rtdbPrefix), action);
};
