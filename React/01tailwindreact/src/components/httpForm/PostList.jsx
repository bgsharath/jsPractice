import React, { useEffect, useState } from "react";
import axios from "axios";

export const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [postListError, setPostListError] = useState();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPostList(res.data);
      })
      .catch((err) => {
        setPostListError(err);
      });
  }, []);

  if(postListError){
    return <div>Something went wrong</div>
  }

  return (
    <>
    
      {postList &&
        postList.map((item) => <div key={item.id}>{item.title}</div>)}
    </>
  );
};
