import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import {PostList as PostListData} from "../store/post-list-store";
import Welcome from "./welcome";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
    const {postList, fetching} =useContext(PostListData);


    return (
    <>
    {fetching && <LoadingSpinner></LoadingSpinner>}
    {!fetching && postList.length === 0 && <Welcome />}
    {!fetching && postList.map((post) => (
            <Post key={post.id} post={post} /> 
        ))}
        </>
    )
}
export default PostList