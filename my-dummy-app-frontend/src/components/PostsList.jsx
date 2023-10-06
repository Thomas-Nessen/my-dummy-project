import { useLoaderData } from "react-router-dom";

import classes from "./PostsList.module.css";
import Post from "./Post";

function PostsList() {
  const posts = useLoaderData()

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {/* Map the array of posts so all Post components are outputted.
                Add a unique 'key' prop to the Post component to give the list a unique ID */}
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2> There are no posts yet.</h2>
          <p> Make some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
