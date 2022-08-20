import React, { useState, useEffect, Suspense } from "react";
import { Avatar } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import firebase from "firebase/app";
import { db } from "../../../../firebase/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../features/userSlice";
import FlipMove from "react-flip-move";

const InputOptions = React.lazy(() => import("./InputOptions"));
const Post = React.lazy(() => import("../posts/Post"));

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data(0) };
          })
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user?.displayName,
      description: "Demo Account",
      message: inputText.trim(),
      photoUrl: user?.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      like: 0,
      likedUsers: [],
    });

    setInputText("");
  };

  return (
    <div className="feed">
      <div className="feed__input-container">
        <Avatar className="feed__avatar" src={user?.photoUrl} />
        <div className="feed__input">
          <form>
            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button type="submit" onClick={sendPost}>
              Post
            </button>
          </form>
        </div>
        <div className="feed__input-options">
          <Suspense fallback={null}>
            <InputOptions title="Photo" Icon={ImageIcon} color="#70b5f9" />
          </Suspense>
          <Suspense fallback={null}>
            <InputOptions
              title="Video"
              Icon={SubscriptionsIcon}
              color="#7fc15e"
            />
          </Suspense>
          <Suspense fallback={null}>
            <InputOptions title="Event" Icon={EventNoteIcon} color="#e7a33e" />
          </Suspense>
          <Suspense fallback={null}>
            <InputOptions
              title="Write article"
              Icon={CalendarViewDayIcon}
              color="#f5987e"
            />
          </Suspense>
        </div>
      </div>
      <FlipMove>
        <Suspense fallback={null}>
          {posts.map(
            ({ id, data: { name, description, message, photoUrl, like } }) => {
              return (
                <Post
                  name={name}
                  description={description}
                  message={message}
                  photoUrl={photoUrl}
                  id={id}
                  key={id}
                  like={like}
                />
              );
            }
          )}
        </Suspense>
      </FlipMove>
    </div>
  );
}

export default Feed;
