import React, { useState, useEffect } from "react";
import PostsList from "./PostsList";
import CommentsList from "./CommentsList";
import UsersList from "./UsersList";
import './PageData.css'





function PageData() {
  const [type, setType] = useState("posts");
  const [data, setData] = useState([]);
  const getData = async (type) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    getData(type);
  }, [type]);
  return (
      <>
        <div>
            <button className='postButton' onClick={() => setType("posts")}>Posts</button>
            <button className='userButton' onClick={() => setType("users")}>Users</button>
            <button className='commentButton'onClick={() => setType("comments")}>Comments</button>
        </div>
        <div className="container-fluid">
        {type === "posts" ? <PostsList data={data} /> : type === "comments" ? <CommentsList data={data} /> : type === "users" ? <UsersList   />:<></>}
        

        </div>
      </>
  );
}
export default PageData;