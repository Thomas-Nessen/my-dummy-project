import { Outlet } from "react-router-dom"
import PostsList from "../components/PostsList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

// Loader function to fetch posts from backend
export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts
}
