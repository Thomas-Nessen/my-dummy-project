import { Link, Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

function NewPost() {
  function getDateTime() {
    const d = new Date();
    const d_obj = {
      day: d.getDay(),
      month: d.getMonth(),
      year: d.getFullYear(),
      hour: d.getHours(),
      minute: d.getMinutes(),
    };
    return d_obj;
  }

  return (
    <Modal>
      <Form method="post" className={classes.form} id="newPost">
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="body" />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>

        <p className={classes.actions}>
          <Link to=".." form="newPost" type="button">
            Cancel
          </Link>
          <button form="newPost"> Sumbit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

// Route actions are functions that are fired when a form is submitted
// Form needs a 'name' tag to extract data.

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // Changes form data to normal Object {body:... , author: ...}
  fetch("http://localhost:8080/posts", {
    //backend port to
    method: "POST", //send data
    body: JSON.stringify(postData), //in JSON form
    headers: {
      "Content-Type": "application/json", //
    },
  });

  return redirect("/");
}
