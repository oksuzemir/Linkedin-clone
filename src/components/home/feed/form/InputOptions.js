import React from "react";
import { db } from "../../../../firebase/firebase";
import firebase from "firebase/app";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../features/userSlice";

function InputOptions({ Icon, title, color, id }) {
  const user = useSelector(selectUser);
  const likeHandler = () => {
    const userUID = user.uid;
    const userColl = db.collection("posts").doc(id);
    userColl.get().then((doc) => {
      if (doc.data().likedUsers.length !== 0) {
        doc.data().likedUsers.map((userID) => {
          if (title === "Like" && userUID !== userID.id) {
            db.collection("posts")
              .doc(id)
              .update({
                like: firebase.firestore.FieldValue.increment(1),
                likedUsers: [{ id: userUID }],
              });
          } else if (title === "Like" && userUID === userID.id) {
            db.collection("posts")
              .doc(id)
              .update({
                like: firebase.firestore.FieldValue.increment(-1),
                likedUsers: doc
                  .data()
                  .likedUsers.filter((data) => data.id !== userUID),
              });
          }
        });
      } else if (doc.data().likedUsers.length === 0) {
        if (title === "Like") {
          db.collection("posts")
            .doc(id)
            .update({
              like: firebase.firestore.FieldValue.increment(1),
              likedUsers: [{ id: userUID }],
            });
        }
      }
    });
  };
  return (
    <div className="input__option" onClick={likeHandler}>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOptions;
