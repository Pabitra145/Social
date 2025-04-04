import { useContext, useRef } from "react"
import {PostList} from "../store/post-list-store";
const CreatePost = () => {
  const {addPost} = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();


  const reactionsElement = useRef();
  const tagsElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value ="";
    tagsElement.current.value = "";
    addPost(userId, postTitle, postBody, reactions, tags)
  }
return (
    <>
    <form className="createpost" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your User Id here</label>
    <input type="text" ref={userIdElement} className="form-control" id="UserId" placeholder="Your UserId"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="Title" placeholder="How are you feeling today"/>
    </div>
    <div className="mb-3">
    <label htmlFor="text" rows="4" className="form-label">Post Content</label>
    <textarea type="text" ref={postBodyElement} className="form-control" id="Content" placeholder="Tell us more"/>
    </div>
    <div className="mb-3">
    <label htmlFor="Reactions" className="form-label">number of reactions</label>
    <input type="text" ref={reactionsElement} className="form-control" id="title" placeholder="How many people reacted to this post"/>
    </div>
    <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter  your tags here</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Enter your tags"/>
    </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form></>
)
}
export default CreatePost